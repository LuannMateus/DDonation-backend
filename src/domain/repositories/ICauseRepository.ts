import Cause from '../entities/Cause';

export interface ICauseRepository {
    save(cause: Cause): Promise<void>;

    findAll(): Promise<Cause[]>;

    findById(id: string): Promise<Cause>;
}
