import Donor from '../../entities/Donor';
import { IDonorRepository } from '../../repositories/IDonorRepository';

export default class UpdateDonorById {
    constructor(private readonly donorRepository: IDonorRepository) {}

    async execute(id: string, donor: Donor) {
        await this.donorRepository.updateById(id, donor);
    }
}
