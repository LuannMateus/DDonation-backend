import Donor from '../entities/Donor';

export interface IDonorRepository {
    save(donor: Donor): Promise<void>;
}
