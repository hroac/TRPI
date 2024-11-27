import { Guid } from "guid-typescript";

export interface UserResults {
    testId: Guid;
    mode: string,
    types: Record<string, number>
    modes: Record<string, number>
    answers: Record<string, Record<string, string>>
    gender: string,
}