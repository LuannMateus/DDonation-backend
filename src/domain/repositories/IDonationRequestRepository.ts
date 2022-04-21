import DonationRequest from '../entities/DonationRequest';

export interface IDonationRequestRepository {
    save(donationRequest: DonationRequest): Promise<void>;
}
