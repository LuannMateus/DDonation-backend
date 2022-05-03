import { IDonationRequestRepository } from '../../repositories/IDonationRequestRepository';

export class FindAllDonationRequestsByCategoryAndEmergency {
    constructor(
        private readonly donationRequestRepository: IDonationRequestRepository,
    ) {}

    async execute(category: string, emergency: boolean) {
        return await this.donationRequestRepository.findAllByCategoryAndEmergency(
            category,
            emergency,
        );
    }
}
