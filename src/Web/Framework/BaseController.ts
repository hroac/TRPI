import { FileLogger } from "../../TraumaIndicator/Utilities/FileLogger";
import { ConfigOptions } from 'elasticsearch';
import { Controller, Param, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { ModuleRef } from '@nestjs/core/injector';
import { evt } from "../../TraumaIndicator/Utilities";
import * as functions from 'firebase-functions'

@Controller()
export class BaseController {
 
    public constructor(commandBus?: CommandBus) {
        this.commandBus = commandBus || {} as CommandBus;
        this.log = new FileLogger()
        this.config = functions.config();
    }

    public log: FileLogger;

    protected commandBus: CommandBus;

    public config: Record<any, any>;

}