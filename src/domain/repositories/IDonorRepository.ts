import Donor from '../entities/Donor';

export interface IDonorRepository {
    save(donor: Donor): Promise<void>;

    findAll(): Promise<Donor[]>;

    findById(id: string): Promise<Donor>;

    update(id: string, donor: Donor): Promise<void>;

    deleteById(id: string): Promise<void>;
}
