export interface TikTokComment {
    text: string;
    createTime: number; // Timestamp
    user: {
        userId: string;
        uniqueId: string;
        nickname: string;
    };
}

export interface TikTokVideo {
    id: string;
    author: {
        userId: string;
        uniqueId: string;
        nickname: string;
    };
    createTime: number; // Timestamp
    description: string;
    comments: TikTokComment[];
}

export interface TikTokHashtag {
    id: string;
    title: string;
    createTime: number; // Timestamp
    videoCount: number;
    viewCount: number;
    description: string;
    user: {
        userId: string;
        uniqueId: string;
        nickname: string;
    };
}
