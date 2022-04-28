import DonationRequest from '../../entities/DonationRequest';
import { IDonationRequestRepository } from '../../repositories/IDonationRequestRepository';

export class FindDonationRequestById {
    constructor(
        private readonly donationRequestRepository: IDonationRequestRepository,
    ) {}

    public async execute(id: string): Promise<DonationRequest> {
        const donationRequest = await this.donationRequestRepository.findById(
            id,
        );

        return donationRequest;
    }
}
