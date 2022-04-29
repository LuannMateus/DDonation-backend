import DonorCreditCard from '../../entities/DonorCreditCard';
import { IDonorCreditCardRepository } from '../../repositories/IDonorCreditCardRepository';

export class CreateDonorCreditCard {
    constructor(
        private readonly donorCreditCardRepository: IDonorCreditCardRepository,
    ) {}

    async execute(donorCreditCard: DonorCreditCard): Promise<DonorCreditCard> {
        return await this.donorCreditCardRepository.save(donorCreditCard);
    }
}
