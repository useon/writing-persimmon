export type PostType = {
  id?: number;
  issue?: 'today' | 'free';
  title: string;
  user_id: string;
  created_at: string;
  view?: number;
  content: string;
  like: number;
  page?: number;
  comment_id?: number;
  comments: CommentType[] | {}[];
  topic?: string;
  topic_id?: number;
};

export type CommentType = {
  id: number;
  create_at: string;
  comment_user_id: string;
  comment_content: string;
  post_id: number;
};
