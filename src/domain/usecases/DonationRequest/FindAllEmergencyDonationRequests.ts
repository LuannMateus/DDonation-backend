import DonationRequest from '../../entities/DonationRequest';
import { IDonationRequestRepository } from '../../repositories/IDonationRequestRepository';

export class FindAllEmergencyDonationRequests {
    constructor(
        private readonly donationRequestRepository: IDonationRequestRepository,
    ) {}

    async execute(): Promise<DonationRequest[]> {
        return await this.donationRequestRepository.findAllEmergency();
    }
}
