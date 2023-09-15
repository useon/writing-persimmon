import { supabase } from '@/supabase';

export const getTopicByDateApi = async (currentArray: number[], tomorrowArray: number[]) => {
  const { data: topic, error } = await supabase!
    .from('topic')
    .select('*')
    .gte('created_at', currentArray.join('-'))
    .lt('created_at', tomorrowArray.join('-'));

  if (error) {
    return [];
  } else {
    return topic;
  }
};
