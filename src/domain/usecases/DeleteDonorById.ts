import { IDonorRepository } from '../repositories/IDonorRepository';

export default class DeleteDonorById {
    constructor(private readonly donorRepository: IDonorRepository) {}

    async execute(id: string) {
        await this.donorRepository.deleteById(id);
    }
}
