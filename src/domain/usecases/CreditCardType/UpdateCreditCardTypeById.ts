import { CreditCardType } from '../../entities/CreditCardType';
import { ICreditCardTypeRepository } from '../../repositories/ICreditCardTypeRepository';

export class UpdateCreditCardTypeById {
    constructor(
        private readonly creditCardTypeRepository: ICreditCardTypeRepository,
    ) {}

    async execute(id: string, creditCardType: CreditCardType) {
        await this.creditCardTypeRepository.updateById(id, creditCardType);
    }
}
