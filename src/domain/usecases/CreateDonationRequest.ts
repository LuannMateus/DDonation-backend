import DonationRequest from '../entities/DonationRequest';
import { IDonationRequestRepository } from '../repository/IDonationRequestRepository';

export default class CreateDonationRequest {
    constructor(
        private readonly donationRequestRepository: IDonationRequestRepository,
    ) {}

    async execute(donationRequest: DonationRequest): Promise<void> {
        await this.donationRequestRepository.save(donationRequest);
    }
}
