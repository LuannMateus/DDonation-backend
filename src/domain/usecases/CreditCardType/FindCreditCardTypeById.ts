import { ICreditCardTypeRepository } from '../../repositories/ICreditCardTypeRepository';

export class FindCreditCardTypeById {
    constructor(
        private readonly creditCardTypeRepository: ICreditCardTypeRepository,
    ) {}

    async execute(id: string) {
        return await this.creditCardTypeRepository.findById(id);
    }
}
