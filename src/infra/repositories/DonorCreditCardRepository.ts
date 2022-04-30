import { prisma } from '../database/prisma';
import { IDonorCreditCardRepository } from '../../domain/repositories/IDonorCreditCardRepository';
import DonorCreditCard from '../../domain/entities/DonorCreditCard';
import {
    BadRequestError,
    FkError,
    NotFoundError,
    ServerError,
} from '../../presentation/errors';
import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime';

export class DonorCreditCardRepository implements IDonorCreditCardRepository {
    async save(donorCreditCard: DonorCreditCard): Promise<DonorCreditCard> {
        try {
            return await prisma.donorCreditCard.create({
                data: {
                    ...donorCreditCard,
                },
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

    async findAll(): Promise<DonorCreditCard[]> {
        try {
            return await prisma.donorCreditCard.findMany();
        } catch (e) {
            throw new ServerError();
        }
    }

    async findById(id: string): Promise<DonorCreditCard> {
        try {
            const donorCardCredit = await prisma.donorCreditCard.findUnique({
                where: { id },
            });

            if (!donorCardCredit) throw new NotFoundError();

            return donorCardCredit;
        } catch (e) {
            if (e instanceof NotFoundError) throw new NotFoundError();

            throw new ServerError();
        }
    }

    async updateById(
        id: string,
        donorCreditCard: DonorCreditCard,
    ): Promise<void> {
        try {
            await prisma.donorCreditCard.update({
                where: { id },
                data: donorCreditCard,
            });
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2025') throw new NotFoundError();

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

    async deleteById(id: string): Promise<void> {
        try {
            await prisma.donorCreditCard.delete({
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
