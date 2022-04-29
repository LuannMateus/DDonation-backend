import { prisma } from '../database/prisma';
import { IDonorCreditCardRepository } from '../../domain/repositories/IDonorCreditCardRepository';
import DonorCreditCard from '../../domain/entities/DonorCreditCard';
import { ServerError } from '../../presentation/errors';

export class DonorCreditCardRepository implements IDonorCreditCardRepository {
    async findAll(): Promise<DonorCreditCard[]> {
        try {
            return await prisma.donorCreditCard.findMany();
        } catch (e) {
            throw new ServerError();
        }
    }
}
