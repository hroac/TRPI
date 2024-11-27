
import { Guid } from "guid-typescript";
import { Command } from "../Command";

export class SaveResultsUserCommand extends Command {
    public constructor(userId: Guid, testId: Guid, types: Record<string, number>, modes: Record<string, number>, mode: string, answers: Record<string, Record<string, string>>, gender: string) {
        super(userId)

        this.TestId = testId;
        this.Types = types;
        this.Modes = modes;
        this.Mode = mode;
        this.Answers = answers;
        this.Gender = gender;
    }

    public TestId: Guid;

    public Types: Record<string, number>;

    public Modes: Record<string, number>;

    public Mode: string;

    public Answers: Record<string, Record<string, string>>;

    public Gender: string;
   
        
    }