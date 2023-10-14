import { useState } from 'react';

import { styled } from 'styled-components';

import SignUpModal from '../SignUpModal/SignUpModal';
import { signUpApi } from '@/apis/auth/sign-up';
import {
  emailValidation,
  passwordCheckValidation,
  passwordValidation,
} from '@/validations/signUpValidation';

const SignUpWithEmail = () => {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });
  const [formError, setFormError] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });
  const [signUpCompleted, setSignUpCompleted] = useState('');

  const changeEmailState = (value: string) => {
    if (value === '') {
      setFormError({
        ...formError,
        email: 'empty',
      });
    } else {
      const isEmailPass = emailValidation(value);
      isEmailPass &&
        setFormInput({
          ...formInput,
          email: value,
        });
      setFormError({
        ...formError,
        email: isEmailPass ? 'valid' : 'invalid',
      });
    }
  };

  const changePasswordState = (value: string) => {
    if (value === '') {
      setFormError({
        ...formError,
        password: 'empty',
      });
    } else {
      const isPasswordPass = passwordValidation(value);
      isPasswordPass &&
        setFormInput({
          ...formInput,
          password: value,
        });
      setFormError({
        ...formError,
        password: isPasswordPass ? 'valid' : 'invalid',
      });
    }
  };

  const changePasswordCheckState = (value: string) => {
    if (value === '') {
      setFormError({
        ...formError,
        passwordCheck: 'empty',
      });
    } else {
      const isPasswordCheckPass = passwordCheckValidation(formInput.password, value);
      isPasswordCheckPass &&
        setFormInput({
          ...formInput,
          passwordCheck: value,
        });
      setFormError({
        ...formError,
        passwordCheck: isPasswordCheckPass ? 'valid' : 'invalid',
      });
    }
  };

  const changeErrorState = (target: 'email' | 'password' | 'passwordCheck') => {
    if (formError[target] === '') {
      setFormError({
        ...formError,
        [target]: 'empty',
      });
    }
  };

  const handleClick = async () => {
    if (
      formError.email === 'valid' &&
      formError.password === 'valid' &&
      formError.passwordCheck === 'valid'
    ) {
      const isSuccess = await signUpApi(formInput.email, formInput.password);
      isSuccess ? setSignUpCompleted('completed') : setSignUpCompleted('error');
    } else {
      changeErrorState('email');
      changeErrorState('password');
      changeErrorState('passwordCheck');
    }
  };

  return (
    <Form>
      <FormItem>
        <FormLebel>이메일</FormLebel>
        <InfoText>
          영문, 숫자 혹은 영문과 숫자를 조합한 5자 이상 16자 이하의 아이디를 가진 이메일을
          입력해주세요.
        </InfoText>
        <FormInput placeholder='이메일' onBlur={(event) => changeEmailState(event.target.value)} />
        {formError.email === 'empty' && <ErrorText>이메일은 필수 입력 항목입니다.</ErrorText>}
        {formError.email === 'invalid' && <ErrorText>사용 불가능한 이메일입니다.</ErrorText>}
      </FormItem>
      <FormItem>
        <FormLebel>비밀번호</FormLebel>
        <InfoText>
          영문, 숫자, 특수 문자를 포함한 8자 이상 20자 이하의 비밀번호를 입력해주세요.
        </InfoText>
        <FormInput
          type='password'
          onBlur={(event) => changePasswordState(event.target.value)}
          placeholder='비밀번호'
        />
        {formError.password === 'empty' && <ErrorText>비밀번호는 필수 입력 항목입니다.</ErrorText>}
        {formError.password === 'invalid' && (
          <ErrorText>
            비밀번호는 영문, 숫자, 특수 문자를 포함하여 8자 이상 20자 이하 이어야 합니다.
          </ErrorText>
        )}
      </FormItem>
      <FormItem>
        <FormLebel>비밀번호 확인</FormLebel>
        <FormInput
          type='password'
          onBlur={(event) => changePasswordCheckState(event.target.value)}
          placeholder='비밀번호 확인'
        />
        {formError.passwordCheck === 'empty' && (
          <ErrorText>확인을 위해 비밀번호를 한번 더 입력해주세요.</ErrorText>
        )}
        {formError.passwordCheck === 'invalid' && (
          <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
        )}
      </FormItem>
      <ButtonWrapper>
        <Button type='button' onClick={handleClick}>
          회원가입하기
        </Button>
      </ButtonWrapper>
      {signUpCompleted === 'error' && <ErrorText>이미 가입된 계정입니다.</ErrorText>}
      {signUpCompleted === 'completed' && <SignUpModal />}
    </Form>
  );
};

export default SignUpWithEmail;

const Form = styled.form`
  margin-bottom: 20px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const FormLebel = styled.label`
  margin-bottom: 12px;
  font-weight: 700;
`;

const FormInput = styled.input`
  padding: 12px 7px;
  font-size: 0.9rem;
  &:focus {
    outline-color: var(--main-color);
  }
`;

const ButtonWrapper = styled.div`
  margin: 20px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  background-color: var(--main-color);
  color: #ffff;
  font-size: 1.1rem;
  cursor: pointer;
`;

const InfoText = styled.p`
  margin-bottom: 12px;
  color: lightgrey;
  line-height: 16px;
  font-size: 0.88rem;
`;

const ErrorText = styled.p`
  margin-top: 4px;
  color: red;
  line-height: 20px;
  font-size: 0.9rem;
`;
