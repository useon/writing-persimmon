import { supabase } from '@/supabase';

export const getPostApi = async (from: number, to: number) => {
  const { data: posts, error } = await supabase!
    .from('post')
    .select('*, comments: comment(*)')
    .range(from, to);

  if (error) {
    return [];
  } else {
    return posts;
  }
};
