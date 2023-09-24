import { supabase } from '@/supabase';

export const getTopicByRangeApi = async (from: number, to: number) => {
  const { data: topics, count, error } = await supabase!
    .from('topic')
    .select('*, posts: post(*)', { count: 'exact'})
    .range(from, to);

  if (error) {
    return [];
  } else {
    return {topics: topics, count: count};
  }
};
