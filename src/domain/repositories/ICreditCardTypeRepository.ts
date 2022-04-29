import { CreditCardType } from '../entities/CreditCardType';

export interface ICreditCardTypeRepository {
    save(creditCardType: CreditCardType): Promise<void>;

    findAll(): Promise<CreditCardType[]>;

    findById(id: string): Promise<CreditCardType>;

    updateById(id: string, creditCardType: CreditCardType): Promise<void>;

    deleteById(id: string): Promise<void>;
}
