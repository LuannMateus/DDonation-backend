import { prisma } from '../database/prisma';
import DonationRequest from '../../domain/entities/DonationRequest';

export default class DonationRequestRepository {
    async save(donationRequest: DonationRequest) {
        await prisma.donationRequest.create({
            data: donationRequest,
        });
    }
}
