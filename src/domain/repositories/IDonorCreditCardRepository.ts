import DonorCreditCard from '../entities/DonorCreditCard';

export interface IDonorCreditCardRepository {
    save(donorCreditCard: DonorCreditCard): Promise<DonorCreditCard>;

    findAll(): Promise<DonorCreditCard[]>;
}
