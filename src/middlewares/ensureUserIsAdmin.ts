import { NextFunction, Request, Response } from "express";

export function ensureUserIsAdmin(req: Request, res: Response, next: NextFunction) {
    // some logic here
    if (!req.query.admin) {
        return res.status(403).send('Unauthorized.');
    }
    next();
}