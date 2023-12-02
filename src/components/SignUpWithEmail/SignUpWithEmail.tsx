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
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');
  const [signUpCompleted, setSignUpCompleted] = useState('');

  const controllerState = async (type: string, value: string) => {
    switch (type) {
      case 'email':
        const emailState = value === '' ? 'empty' : emailValidation(value) ? 'valid' : 'invalid';
        setEmailError(emailState);
        if (emailState === 'valid') {
          setFormInput({
            ...formInput,
            email: value,
          });
        }
        break;
      case 'password':
        const passwordState =
          value === '' ? 'empty' : passwordValidation(value) ? 'valid' : 'invalid';
        setPasswordError(passwordState);
        if (passwordState === 'valid') {
          setFormInput({
            ...formInput,
            password: value,
          });
        }
        break;
      case 'passwordCheck':
        const passwordCheckState =
          value === ''
            ? 'empty'
            : passwordCheckValidation(formInput.password, value)
            ? 'valid'
            : 'invalid';
        if (passwordCheckState === 'valid') {
          setFormInput({
            ...formInput,
            passwordCheck: value,
          });
        }
        break;
    }
  };

  const handleOnClick = async () => {
    if (emailError === 'valid' && passwordError === 'valid' && passwordCheckError === 'valid') {
      signUpApi(formInput.email, formInput.password);
      const isSuccess = await signUpApi(formInput.email, formInput.password);
      isSuccess ? setSignUpCompleted('completed') : setSignUpCompleted('error');
    }
    if (emailError === '') setEmailError('empty');
    if (passwordError === '') setPasswordError('empty');
    if (passwordCheckError === '') setPasswordCheckError('empty');
  };

  return (
    <Form>
      <FormItem>
        <FormLebel>이메일</FormLebel>
        <InfoText>
          영문, 숫자 혹은 영문과 숫자를 조합한 5자 이상 16자 이하의 아이디를 가진 이메일을
          입력해주세요.
        </InfoText>
        <FormInput
          placeholder='이메일'
          onBlur={(event) => controllerState('email', event.target.value)}
        />
        {emailError === 'empty' && <ErrorText>이메일은 필수 입력 항목입니다.</ErrorText>}
        {emailError === 'invalid' && <ErrorText>사용 불가능한 이메일입니다.</ErrorText>}
      </FormItem>
      <FormItem>
        <FormLebel>비밀번호</FormLebel>
        <InfoText>
          영문, 숫자, 특수 문자를 포함한 8자 이상 20자 이하의 비밀번호를 입력해주세요.
        </InfoText>
        <FormInput
          type='password'
          onBlur={(event) => controllerState('password', event.target.value)}
          placeholder='비밀번호'
        />
        {passwordError === 'empty' && <ErrorText>비밀번호는 필수 입력 항목입니다.</ErrorText>}
        {passwordError === 'invalid' && (
          <ErrorText>
            비밀번호는 영문, 숫자, 특수 문자를 포함하여 8자 이상 20자 이하 이어야 합니다.
          </ErrorText>
        )}
      </FormItem>
      <FormItem>
        <FormLebel>비밀번호 확인</FormLebel>
        <FormInput
          type='password'
          onBlur={(event) => controllerState('passwordCheck', event.target.value)}
          placeholder='비밀번호 확인'
        />
        {passwordCheckError === 'empty' && (
          <ErrorText>확인을 위해 비밀번호를 한번 더 입력해주세요.</ErrorText>
        )}
        {passwordCheckError === 'invalid' && <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>}
      </FormItem>
      <ButtonWrapper>
        <Button type='button' onClick={handleOnClick}>
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
  margin: 30px 0;
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
