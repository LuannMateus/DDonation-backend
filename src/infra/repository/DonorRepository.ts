import Donor from '../../domain/entities/Donor';
import { IDonorRepository } from '../../domain/repository/IDonorRepository';
import { prisma } from '../database/prisma';

export default class DonorRepository implements IDonorRepository {
    async save(donor: Donor): Promise<void> {
        await prisma.donor.create({
            data: { ...donor },
        });
    }

    async findAll(): Promise<Donor[]> {
        const donors = await prisma.donor.findMany();

        return donors;
    }

    async findById(id: string): Promise<Donor> {
        const donor = await prisma.donor.findUnique({
            where: { id },
        });

        if (!donor) {
            throw new Error('Donor not found');
        }

        return donor;
    }
}
