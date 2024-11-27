import { Guid } from "guid-typescript";

export class RegisterTrendCommand {
    constructor(trendId: Guid, hashtag: string) {
        this.TrendId = trendId;
        this.Hashtag = hashtag;
    }

    public TrendId: Guid;

    public Hashtag: string;
}