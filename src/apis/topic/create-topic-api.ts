import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

import { Database } from '../../types/supabase.ts';

export const createTopicApi = async (topic: string, supabaseUrl: string, supabaseKey: string) => {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);
  console.log('topic : ', topic);
  const { data: newTopic, error } = await supabase
    .from('topic')
    .insert([{ name: topic.replace(/"/g, '') }])
    .select();

  if (error) {
    return [];
  } else {
    return newTopic;
  }
};
