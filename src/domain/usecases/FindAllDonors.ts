import Donor from '../entities/Donor';
import { IDonorRepository } from '../repository/IDonorRepository';

export default class FindAllDonors {
    constructor(private readonly donorRepository: IDonorRepository) {}

    async execute(): Promise<Donor[]> {
        const donors = await this.donorRepository.findAll();

        return donors;
    }
}
