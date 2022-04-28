import { prisma } from '../database/prisma';
import DonationRequest from '../../domain/entities/DonationRequest';
import { ServerError } from '../../presentation/errors';

export default class DonationRequestRepository {
    async save(donationRequest: DonationRequest): Promise<void> {
        await prisma.donationRequest.create({
            data: donationRequest,
        });
    }

    async findAll(): Promise<DonationRequest[]> {
        try {
            return await prisma.donationRequest.findMany();
        } catch (e) {
            throw new ServerError();
        }
    }
}
