import { supabase } from '@/supabase';

export const getPostByTopicIdApi = async (from: number, to: number, topic_id: number) => {
  const { data: posts, error } = await supabase!
    .from('post')
    .select('*, comments: comment(*)')
    .eq('topic_id', topic_id)
    .range(from, to);

  if (error) {
    return [];
  } else {
    return posts;
  }
};
