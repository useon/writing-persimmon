export type TopicType = {
  id: number;
  created_at: string;
  name: string;
  posts: PostsType[];
};

type PostsType = {
  content: string;
  created_at: string;
  id: number;
  like: number;
  title: string;
  topic: string;
  topic_id: number;
  user_id: string;
  issue: string;
  view: number;
}

export type TopicsDataType = {
  topics: TopicType[];
  count: number;
}