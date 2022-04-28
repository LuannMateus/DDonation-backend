import { prisma } from '../database/prisma';
import DonationRequest from '../../domain/entities/DonationRequest';
import { NotFoundError, ServerError } from '../../presentation/errors';
import { IDonationRequestRepository } from '../../domain/repositories/IDonationRequestRepository';

export default class DonationRequestRepository
    implements IDonationRequestRepository
{
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

    async findById(id: string): Promise<DonationRequest> {
        try {
            const donor = await prisma.donationRequest.findUnique({
                where: { id },
            });

            if (!donor) throw new NotFoundError();

            return donor;
        } catch (e) {
            if (e instanceof NotFoundError) throw new NotFoundError();

            throw new ServerError();
        }
    }
}
