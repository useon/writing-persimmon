import { supabase } from '@/supabase';

export const signInApi = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return false;
  } else {
    // 추후에 data를 이용해서 다른 기능 연결.
    console.log(data, 'signin');
    return true;
  }
};
