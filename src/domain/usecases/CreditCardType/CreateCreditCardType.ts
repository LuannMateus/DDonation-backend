import { CreditCardType } from '../../entities/CreditCardType';
import { ICreditCardTypeRepository } from '../../repositories/ICreditCardTypeRepository';

export class CreateCreditCardType {
    constructor(
        private readonly creditCardTypeRepository: ICreditCardTypeRepository,
    ) {}

    async execute(creditCardType: CreditCardType) {
        await this.creditCardTypeRepository.save(creditCardType);
    }
}
