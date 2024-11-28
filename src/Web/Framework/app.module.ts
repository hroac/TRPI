import { Module } from '@nestjs/common';
import { LandingPageController } from '../Controllers/LandingPageController';
import { RebuildController } from '../Controllers/RebuildController';
import { UserController } from '../Controllers/User/UserController';
import { ApiKeyMiddleware } from './api-key.middleware';

@Module({
    imports: [],
    controllers: [
        LandingPageController,
        RebuildController,
        UserController
    ],
    providers: [],
})
export class AppModule {}