import Donor from '../../entities/Donor';
import { IDonorRepository } from '../../repositories/IDonorRepository';

export default class FindDonorById {
    constructor(private readonly donorRepository: IDonorRepository) {}

    async execute(id: string): Promise<Donor> {
        const donor = await this.donorRepository.findById(id);

        return donor;
    }
}
