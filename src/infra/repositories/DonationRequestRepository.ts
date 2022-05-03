import { prisma } from '../database/prisma';
import DonationRequest from '../../domain/entities/DonationRequest';
import {
    BadRequestError,
    FkError,
    NotFoundError,
    ServerError,
} from '../../presentation/errors';
import { IDonationRequestRepository } from '../../domain/repositories/IDonationRequestRepository';
import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime';
export default class DonationRequestRepository
    implements IDonationRequestRepository
{
    async save(donationRequest: DonationRequest): Promise<void> {
        try {
            await prisma.donationRequest.create({
                data: donationRequest,
            });
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2003') {
                    const meta = e.meta as { field_name: string[] };

                    throw new FkError(`${meta.field_name} not found`);
                }
            }

            if (e instanceof PrismaClientValidationError) {
                throw new BadRequestError();
            }

            throw new ServerError();
        }
    }

    async findAll(): Promise<DonationRequest[]> {
        try {
            return await prisma.donationRequest.findMany();
        } catch (e) {
            throw new ServerError();
        }
    }

    async findAllEmergency(): Promise<DonationRequest[]> {
        try {
            return await prisma.donationRequest.findMany({
                where: {
                    emergency: true,
                },
            });
        } catch (e) {
            throw new ServerError();
        }
    }

    async findAllByCategory(category: string): Promise<DonationRequest[]> {
        try {
            const donors = await prisma.donationRequest.findMany({
                where: { category },
            });

            if (!donors) throw new NotFoundError();

            return donors;
        } catch (e) {
            if (e instanceof NotFoundError) throw new NotFoundError();

            throw new ServerError();
        }
    }

    async findAllByCategoryAndEmergency(
        category: string,
        emergency: boolean,
    ): Promise<DonationRequest[]> {
        try {
            const donationRequests = await prisma.donationRequest.findMany({
                where: {
                    category,
                    emergency,
                },
                include: {
                    owner: true,
                },
            });

            if (!donationRequests) throw new NotFoundError();

            return donationRequests;
        } catch (e) {
            if (e instanceof NotFoundError) throw new NotFoundError();

            throw new ServerError();
        }
    }

    async findById(id: string): Promise<DonationRequest> {
        try {
            const donor = await prisma.donationRequest.findUnique({
                where: { id },
                include: {
                    owner: true,
                },
            });

            if (!donor) throw new NotFoundError();

            return donor;
        } catch (e) {
            if (e instanceof NotFoundError) throw new NotFoundError();

            throw new ServerError();
        }
    }

    async updateById(
        id: string,
        donationRequest: DonationRequest,
    ): Promise<void> {
        try {
            await prisma.donationRequest.update({
                where: { id },
                data: donationRequest,
            });
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2025') throw new NotFoundError();
            }

            if (e instanceof PrismaClientValidationError) {
                throw new BadRequestError();
            }

            throw new ServerError();
        }
    }

    async deleteById(id: string): Promise<void> {
        try {
            await prisma.donationRequest.delete({
                where: { id },
            });
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2025') throw new NotFoundError();
            }

            throw new ServerError();
        }
    }
}
