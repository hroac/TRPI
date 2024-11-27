
import { Guid } from "guid-typescript";
import { Command } from "../Command";

export class UnlockPremiumCommand extends Command {
    public constructor(userId: Guid) {
        super(userId)

    }

}