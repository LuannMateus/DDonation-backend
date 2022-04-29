import { CreditCardType } from '../entities/CreditCardType';

export interface ICreditCardTypeRepository {
    save(creditCardType: CreditCardType): Promise<void>;

    findAll(): Promise<CreditCardType[]>;
}
