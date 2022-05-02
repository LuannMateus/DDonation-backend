import Cause from '../entities/Cause';

export interface ICauseRepository {
    findAll(): Promise<Cause[]>;
}
