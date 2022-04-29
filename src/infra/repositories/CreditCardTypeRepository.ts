import { prisma } from '../database/prisma';
import { CreditCardType } from '../../domain/entities/CreditCardType';
import { ICreditCardTypeRepository } from '../../domain/repositories/ICreditCardTypeRepository';
import {
    BadRequestError,
    NotFoundError,
    ServerError,
} from '../../presentation/errors';
import { PrismaClientValidationError } from '@prisma/client/runtime';

export class CreditCardTypeRepository implements ICreditCardTypeRepository {
    async save(creditCardType: CreditCardType): Promise<void> {
        try {
            await prisma.creditCardType.create({
                data: creditCardType,
            });
        } catch (e) {
            if (e instanceof PrismaClientValidationError) {
                throw new BadRequestError();
            }

            throw new ServerError();
        }
    }

    async findAll(): Promise<CreditCardType[]> {
        try {
            return await prisma.creditCardType.findMany();
        } catch (e) {
            throw new ServerError();
        }
    }

    async findById(id: string): Promise<CreditCardType> {
        try {
            const creditCardType = await prisma.creditCardType.findUnique({
                where: {
                    id,
                },
            });

            if (!creditCardType) throw new NotFoundError();

            return creditCardType;
        } catch (e) {
            if (e instanceof NotFoundError) throw new NotFoundError();

            throw new ServerError();
        }
    }
}
