import DonorCreditCard from '../../entities/DonorCreditCard';
import { IDonorCreditCardRepository } from '../../repositories/IDonorCreditCardRepository';

export class FindAllDonorCreditCards {
    constructor(
        private readonly donorCreditCardRepository: IDonorCreditCardRepository,
    ) {}

    async execute(): Promise<DonorCreditCard[]> {
        return await this.donorCreditCardRepository.findAll();
    }
}
