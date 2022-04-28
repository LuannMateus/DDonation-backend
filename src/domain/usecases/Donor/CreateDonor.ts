import { IDonorRepository } from '../../repositories/IDonorRepository';
import Donor from '../../entities/Donor';

export default class CreateDonor {
    constructor(private readonly donorRepository: IDonorRepository) {}

    async execute(donor: Donor): Promise<void> {
        await this.donorRepository.save(donor);
    }
}
