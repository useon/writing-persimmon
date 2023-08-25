export type PostType = {
  id: number;
  issue?: 'today' | 'free';
  title: string;
  user_id: string;
  date: string;
  view: number;
  content: string;
  like: number;
  page: number;
  comment: number;
};
