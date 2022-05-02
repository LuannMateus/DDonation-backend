import Cause from '../../entities/Cause';
import { ICauseRepository } from '../../repositories/ICauseRepository';

export class FindCauseById {
    constructor(private readonly causeRepository: ICauseRepository) {}

    async execute(id: string): Promise<Cause> {
        return await this.causeRepository.findById(id);
    }
}
