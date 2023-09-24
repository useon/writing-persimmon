import { supabase } from '@/supabase';

export const getTopicByIdApi = async (id: number) => {
  const { data: topics, error } = await supabase!
    .from('topic')
    .select('*, posts: post(*)', { count: 'exact'})
    .eq('id', id);

  if (error) {
    return [];
  } else {
    return topics;
  }
};