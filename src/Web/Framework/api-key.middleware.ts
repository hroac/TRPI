import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Reflector } from '@nestjs/core';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
    constructor(private reflector: Reflector) { }

    use(req: Request, res: Response, next: NextFunction): void {
        const route = req.route.path;
        const handler = req.route.stack[0].handle;
        const headers = req.headers;

        const apiKey = 'bd6a90bd-31ae-5b91-ef48-271ac0f31c84';
        const key = headers['Authorization'] || headers['authorization']

      
        //console.log(req.rawHeaders[5]);
        if (!apiKey || (headers && key !== apiKey)) {
            throw new UnauthorizedException('Forbidden: Invalid API key');
        }

        next();
    }
}
