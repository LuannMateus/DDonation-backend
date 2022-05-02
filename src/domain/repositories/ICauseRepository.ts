import Cause from '../entities/Cause';

export interface ICauseRepository {
    findAll(): Promise<Cause[]>;

    save(cause: Cause): Promise<void>;
}
