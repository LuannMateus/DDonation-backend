import { CreditCardType } from '../../entities/CreditCardType';
import { ICreditCardTypeRepository } from '../../repositories/ICreditCardTypeRepository';

export class FindAllCreditCardTypes {
    constructor(
        private readonly creditCardTypeRepository: ICreditCardTypeRepository,
    ) {}

    async execute(): Promise<CreditCardType[]> {
        return await this.creditCardTypeRepository.findAll();
    }
}
