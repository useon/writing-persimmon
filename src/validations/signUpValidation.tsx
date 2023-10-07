import { REGEX_ID, REGEX_PASSWORD } from '@/constants/regex';

export const idValidation = (value: string) => {
  if (value !== 'undefined' && REGEX_ID.test(value)) {
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
