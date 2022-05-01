import DonationRequest from '../../entities/DonationRequest';
import { IDonationRequestRepository } from '../../repositories/IDonationRequestRepository';

export class FindAllDonationRequestsByCategory {
    constructor(
        private readonly donationRequestRepository: IDonationRequestRepository,
    ) {}

    async execute(category: string): Promise<DonationRequest[]> {
        return this.donationRequestRepository.findAllByCategory(category);
    }
}
