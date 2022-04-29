import { prisma } from '../database/prisma';
import { CreditCardType } from '../../domain/entities/CreditCardType';
import { ICreditCardTypeRepository } from '../../domain/repositories/ICreditCardTypeRepository';
import { ServerError } from '../../presentation/errors';

export class CreditCardTypeRepository implements ICreditCardTypeRepository {
    async findAll(): Promise<CreditCardType[]> {
        try {
            return prisma.creditCardType.findMany();
        } catch (e) {
            throw new ServerError();
        }
    }
}
