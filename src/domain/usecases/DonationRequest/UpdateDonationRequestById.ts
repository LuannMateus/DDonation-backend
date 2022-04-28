import DonationRequest from '../../entities/DonationRequest';
import { IDonationRequestRepository } from '../../repositories/IDonationRequestRepository';

export class UpdateDonationRequestById {
    constructor(
        private readonly donationRequestRepository: IDonationRequestRepository,
    ) {}

    async execute(id: string, donationRequest: DonationRequest): Promise<void> {
        await this.donationRequestRepository.updateById(id, donationRequest);
    }
}
