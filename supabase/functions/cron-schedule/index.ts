// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

import { getChatGpt } from '../../../src/apis/chatGPT/get-chat-gpt.ts';
import { createTopicApi } from '../../../src/apis/topic/create-topic-api.ts';

const supabaseUrl = Deno.env.get('SUPABASE_URL') as string;
const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') as string;
const openaiApiKey = Deno.env.get('OPENAI_API_KEY') as string;

serve(async (req: any) => {
  let result = '';

  await getChatGpt(openaiApiKey)
    .then((res) => {
      createTopicApi(res, supabaseUrl, supabaseKey)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      result = err;
      console.log(err);
    });

  const data = {
    message: result,
  };
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer API_KEY' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
