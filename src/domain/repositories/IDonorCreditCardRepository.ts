import DonorCreditCard from '../entities/DonorCreditCard';

export interface IDonorCreditCardRepository {
    save(donorCreditCard: DonorCreditCard): Promise<DonorCreditCard>;

    findAll(): Promise<DonorCreditCard[]>;

    findById(id: string): Promise<DonorCreditCard>;

    updateById(id: string, donorCreditCard: DonorCreditCard): Promise<void>;
}
