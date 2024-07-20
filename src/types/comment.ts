export interface IComment {
  likes: number;
  liked: boolean;
  date: Date;
  replies: number;
  id: string;
  author: {
    name: string;
    authorId: string;
    avatar?: string | null;
  };
  body: string;
  type: string;
}
