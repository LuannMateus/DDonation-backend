import { prisma } from '../database/prisma';
import DonationRequest from '../../domain/entities/DonationRequest';
import {
    BadRequestError,
    NotFoundError,
    ServerError,
} from '../../presentation/errors';
import { IDonationRequestRepository } from '../../domain/repositories/IDonationRequestRepository';
import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime';
import { logger } from '../../utils/pino';

export default class DonationRequestRepository
    implements IDonationRequestRepository
{
    async save(donationRequest: DonationRequest): Promise<void> {
        await prisma.donationRequest.create({
            data: donationRequest,
        });
    }

    async findAll(): Promise<DonationRequest[]> {
        try {
            return await prisma.donationRequest.findMany();
        } catch (e) {
            throw new ServerError();
        }
    }

    async findById(id: string): Promise<DonationRequest> {
        try {
            const donor = await prisma.donationRequest.findUnique({
                where: { id },
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
            logger.error(e);

            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2025') throw new NotFoundError();
            }

            if (e instanceof PrismaClientValidationError) {
                throw new BadRequestError();
            }

            throw new ServerError();
        }
    }
}
