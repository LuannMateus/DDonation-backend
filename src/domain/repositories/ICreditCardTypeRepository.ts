import { CreditCardType } from '../entities/CreditCardType';

export interface ICreditCardTypeRepository {
    findAll(): Promise<CreditCardType[]>;
}
