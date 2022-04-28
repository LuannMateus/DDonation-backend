import { IDonationRequestRepository } from '../../repositories/IDonationRequestRepository';

export class DeleteDonationRequestById {
    constructor(
        private readonly donationRequestRepository: IDonationRequestRepository,
    ) {}

    async execute(id: string): Promise<void> {
        await this.donationRequestRepository.deleteById(id);
    }
}
