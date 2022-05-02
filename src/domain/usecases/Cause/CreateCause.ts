import Cause from '../../entities/Cause';
import { ICauseRepository } from '../../repositories/ICauseRepository';

export class CreateCause {
    constructor(private readonly causeRepository: ICauseRepository) {}

    async execute(cause: Cause): Promise<void> {
        await this.causeRepository.save(cause);
    }
}
