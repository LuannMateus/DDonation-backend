import { Request, Response } from 'express';
import { FindAllCauses } from '../../../domain/usecases/Cause/FindAllCauses';
import { CauseRepository } from '../../../infra/repositories/CauseRepository';
import { ServerError } from '../../errors';

export class FindAllCausesController {
    async handle(req: Request, res: Response) {
        try {
            const causeRepository = new CauseRepository();
            const findAllCauses = new FindAllCauses(causeRepository);

            const causes = await findAllCauses.execute();

            res.status(200).json(causes);
        } catch (e) {
            if (e instanceof ServerError) {
                res.status(500).json({
                    message: e.message,
                });
            }
        }
    }
}
