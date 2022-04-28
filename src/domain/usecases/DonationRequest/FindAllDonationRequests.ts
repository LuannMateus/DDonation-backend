import DonationRequest from '../../entities/DonationRequest';
import { IDonationRequestRepository } from '../../repositories/IDonationRequestRepository';

export class FindAllDonationRequests {
    constructor(
        private readonly donationRequestRepository: IDonationRequestRepository,
    ) {}

    async execute(): Promise<DonationRequest[]> {
        return this.donationRequestRepository.findAll();
    }
}
