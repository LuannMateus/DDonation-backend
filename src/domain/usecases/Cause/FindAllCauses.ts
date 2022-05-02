import Cause from '../../entities/Cause';
import { ICauseRepository } from '../../repositories/ICauseRepository';

export class FindAllCauses {
    constructor(private readonly causeRepository: ICauseRepository) {}

    async execute(): Promise<Cause[]> {
        return await this.causeRepository.findAll();
    }
}
