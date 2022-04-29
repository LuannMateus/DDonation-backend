import DonorCreditCard from '../entities/DonorCreditCard';

export interface IDonorCreditCardRepository {
    findAll(): Promise<DonorCreditCard[]>;
}
