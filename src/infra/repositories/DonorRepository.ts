import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import Donor from '../../domain/entities/Donor';
import { IDonorRepository } from '../../domain/repositories/IDonorRepository';
import { FkError, NotFoundError } from '../../presentation/errors';
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

    async update(id: string, donor: Donor): Promise<void> {
        try {
            await prisma.donor.update({
                data: donor,
                where: { id },
            });
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2025') throw new NotFoundError();
            }
        }
    }

    async deleteById(id: string): Promise<void> {
        try {
            await prisma.donor.delete({
                where: { id },
            });
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2025') throw new NotFoundError();

                if (e.code === 'P2003') throw new FkError();
            }
        }
    }
}
