import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime';
import Donor from '../../domain/entities/Donor';
import { IDonorRepository } from '../../domain/repositories/IDonorRepository';
import {
    BadRequestError,
    FkError,
    NotFoundError,
    ServerError,
} from '../../presentation/errors';
import { logger } from '../../utils/pino';
import { prisma } from '../database/prisma';

export default class DonorRepository implements IDonorRepository {
    async save(donor: Donor): Promise<void> {
        try {
            await prisma.donor.create({
                data: { ...donor },
            });
        } catch (e) {
            logger.info(e);

            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    const meta = e.meta as { target: string[] };

                    throw new BadRequestError(`${meta.target} already exists`);
                }
            }

            if (e instanceof PrismaClientValidationError) {
                throw new BadRequestError();
            }

            throw new ServerError();
        }
    }

    async findAll(): Promise<Donor[]> {
        try {
            const donors = await prisma.donor.findMany();

            return donors;
        } catch (e) {
            throw new ServerError();
        }
    }

    async findById(id: string): Promise<Donor> {
        try {
            const donor = await prisma.donor.findUnique({
                where: { id },
            });

            if (!donor) {
                throw new Error('Donor not found');
            }

            return donor;
        } catch (e) {
            if (e instanceof NotFoundError) throw new NotFoundError();

            throw new ServerError();
        }
    }

    async updateById(id: string, donor: Donor): Promise<void> {
        try {
            await prisma.donor.update({
                data: donor,
                where: { id },
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
            await prisma.donor.delete({
                where: { id },
            });
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2025') throw new NotFoundError();

                if (e.code === 'P2003') throw new FkError();
            }
        }
    }
}
