import DonorCreditCard from '../../entities/DonorCreditCard';
import { IDonorCreditCardRepository } from '../../repositories/IDonorCreditCardRepository';

export class FindDonorCreditCardById {
    constructor(
        private readonly donorCreditCardRepository: IDonorCreditCardRepository,
    ) {}

    async execute(id: string): Promise<DonorCreditCard> {
        return await this.donorCreditCardRepository.findById(id);
    }
}
