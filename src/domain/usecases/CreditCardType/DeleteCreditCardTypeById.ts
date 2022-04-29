import { ICreditCardTypeRepository } from '../../repositories/ICreditCardTypeRepository';

export class DeleteCreditCardTypeById {
    constructor(
        private readonly creditCardTypeRepository: ICreditCardTypeRepository,
    ) {}

    async execute(id: string): Promise<void> {
        await this.creditCardTypeRepository.deleteById(id);
    }
}
