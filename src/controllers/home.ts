import { controller, get } from "@webgeek/basic-express-decorators";
import { Request, Response } from 'express';

@controller()
export class HomeController {
    @get('/')
    index(req: Request, res: Response) {
        res.send(`
            <h1>Welcome Home</h1>
            <a href="/admin">Unauthorized Link</a> |
            <a href="/admin?admin=true">Authorized Link</a>
        `)
    }
}