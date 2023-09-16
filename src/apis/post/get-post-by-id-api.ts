import { supabase } from '@/supabase';

export const getPostByIdApi = async (id: number) => {
  const { data: posts, error } = await supabase!
    .from('post')
    .select('*, comments: comment(*)')
    .eq('id', id);

  if (error) {
    return [];
  } else {
    return posts;
  }
};
