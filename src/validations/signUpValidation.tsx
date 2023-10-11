import { REGEX_EMAIL, REGEX_PASSWORD } from '@/constants/regex';

export const emailValidation = (value: string) => {
  const id = value.slice(0, value.indexOf('@'));
  if (id !== 'undefined' && REGEX_EMAIL.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const passwordValidation = (value: string) => {
  if (REGEX_PASSWORD.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const passwordCheckValidation = (password: string, passwordCheck: string) => {
  if (password === passwordCheck) {
    return true;
  } else {
    return false;
  }
};
