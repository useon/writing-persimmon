import { supabase } from '@/supabase';

export const signUpApi = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    return error;
  } else {
    return data;
  }
};
