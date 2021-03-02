import { controller, get, use, validator } from "@webgeek/basic-express-decorators";
import { Request, Response } from 'express';
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdmin";
import { logger } from "../middlewares/logger";
import { checkEmail } from "../validators/checkAge";

@controller('/admin', ensureUserIsAdmin, logger)
export class AdminController {
    @get('/')
    @use(logger)
    index(req: Request, res: Response) {
        res.send(`
            <h1>Welcome to the admin page!</h1>
            <p>
                <a href="/admin/test@test.com?admin=true">Valid Email</a> |
                <a href="/admin/test.com?admin=true">Invalid Email</a>
            </p>
            <a href="/">Go Back</a>
        `)
    }

    @get('/:email', logger)
    @validator(checkEmail)
    age(req: Request, res: Response) {
        res.send(`${req.params.email} is valid`)
    }
}