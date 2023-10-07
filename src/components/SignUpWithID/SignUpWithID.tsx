import { useState } from 'react';

import { styled } from 'styled-components';

import {
  idValidation,
  passwordCheckValidation,
  passwordValidation,
} from '@/validations/signUpValidation';

const SignUpWithID = () => {
  const [formInput, setFormInput] = useState({
    id: '',
    password: '',
    passwordCheck: '',
  });

  const [signUpError, setSignUpError] = useState({
    id: '',
    password: '',
    passwordCheck: '',
  });

  const controllerState = (type: string, value: string) => {
    if (value === '') {
      setSignUpError({
        ...signUpError,
        [type]: 'empty',
      });
    } else {
      if (type === 'id') {
        if (idValidation(value)) {
          setFormInput({
            ...formInput,
            id: value,
          });
          setSignUpError({
            ...signUpError,
            id: 'valid',
          });
        } else {
          setSignUpError({
            ...signUpError,
            id: 'invalid',
          });
        }
      }
      if (type === 'password') {
        if (passwordValidation(value)) {
          setFormInput({
            ...formInput,
            password: value,
          });
          setSignUpError({
            ...signUpError,
            password: 'valid',
          });
        } else {
          setSignUpError({
            ...signUpError,
            password: 'invalid',
          });
        }
      }
      if (type === 'passwordCheck') {
        if (passwordCheckValidation(formInput.password, value)) {
          setFormInput({
            ...formInput,
            passwordCheck: value,
          });
          setSignUpError({
            ...signUpError,
            passwordCheck: 'valid',
          });
        } else {
          setSignUpError({
            ...signUpError,
            passwordCheck: 'invalid',
          });
        }
      }
    }
  };

  return (
    <Form>
      <FormItem>
        <FormLebel>아이디</FormLebel>
        <InfoText>
          영문, 숫자 혹은 영문과 숫자를 조합한 5자 이상 16자 이하의 아이디를 입력해주세요.
        </InfoText>
        <FormInput
          placeholder='아이디'
          onBlur={(event) => controllerState('id', event.target.value)}
        />
        {signUpError.id === 'empty' && <ErrorText>아이디는 필수 입력 항목입니다.</ErrorText>}
        {signUpError.id === 'invalid' && <ErrorText>사용 불가능한 아이디입니다.</ErrorText>}
      </FormItem>
      <FormItem>
        <FormLebel>비밀번호</FormLebel>
        <InfoText>
          영문, 숫자, 특수 문자를 포함한 8자 이상 20자 이하의 비밀번호를 입력해주세요.
        </InfoText>
        <FormInput
          id='password'
          type='password'
          onBlur={(event) => controllerState('password', event.target.value)}
          placeholder='비밀번호'
        />
        {signUpError.password === 'empty' && (
          <ErrorText>비밀번호는 필수 입력 항목입니다.</ErrorText>
        )}
        {signUpError.password === 'invalid' && (
          <ErrorText>
            비밀번호는 영문, 숫자, 특수 문자를 포함하여 8자 이상 20자 이하 이어야 합니다.
          </ErrorText>
        )}
      </FormItem>
      <FormItem>
        <FormLebel>비밀번호 확인</FormLebel>
        <FormInput
          id='passwordCheck'
          type='password'
          onBlur={(event) => controllerState('passwordCheck', event.target.value)}
          placeholder='비밀번호 확인'
        />
        {signUpError.passwordCheck === 'empty' && (
          <ErrorText>확인을 위해 비밀번호를 한번 더 입력해주세요.</ErrorText>
        )}
        {signUpError.passwordCheck === 'invalid' && (
          <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
        )}
      </FormItem>
      <ButtonWrapper>
        <Button type='button' action='submit'>
          회원가입하기
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default SignUpWithID;

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

const Button = styled.button<{ action: 'verify' | 'submit' }>`
  width: 100%;
  padding: 12px 0;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  background-color: ${(props) => (props.action === 'verify' ? '#ffff' : 'var(--main-color)')};
  color: ${(props) => (props.action === 'verify' ? 'var(--main-color)' : '#ffff')};
  font-size: 1.1rem;
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
