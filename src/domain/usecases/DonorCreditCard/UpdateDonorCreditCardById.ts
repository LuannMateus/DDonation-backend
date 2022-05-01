import { DonorCreditCard } from '@prisma/client';
import { IDonorCreditCardRepository } from '../../repositories/IDonorCreditCardRepository';

export class UpdateDonorCreditCardById {
    constructor(
        private readonly donorCreditCardRepository: IDonorCreditCardRepository,
    ) {}

    async execute(
        id: string,
        donorCreditCard: DonorCreditCard,
    ): Promise<DonorCreditCard> {
        return await this.donorCreditCardRepository.updateById(
            id,
            donorCreditCard,
        );
    }
}
