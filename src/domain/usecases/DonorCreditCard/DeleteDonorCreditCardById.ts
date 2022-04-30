import { IDonorCreditCardRepository } from '../../repositories/IDonorCreditCardRepository';

export class DeleteDonorCreditCardById {
    constructor(
        private readonly donorCreditCardRepository: IDonorCreditCardRepository,
    ) {}

    async execute(id: string): Promise<void> {
        await this.donorCreditCardRepository.deleteById(id);
    }
}
