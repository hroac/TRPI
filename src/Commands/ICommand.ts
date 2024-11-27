import { Guid } from "guid-typescript";
import { ICommand as Command } from '@nestjs/cqrs'

export declare interface ICommand extends Command  {

    Id: Guid
}