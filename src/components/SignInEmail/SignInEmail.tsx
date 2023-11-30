import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import { styled } from 'styled-components';

import { signInApi } from '@/apis/auth/sign-in';
import { REGEX_EMAIL } from '@/constants/regex';

const SignInEmail = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [signInError, setSignInError] = useState({
    invalidEmail: false,
    invalidInfo: false,
  });
  const router = useRouter();

  const handleClick = () => {
    if (emailRef.current !== null && passwordRef.current !== null) {
      REGEX_EMAIL.test(emailRef.current.value)
        ? loginResult(emailRef.current.value, passwordRef.current.value)
        : setSignInError({
            invalidEmail: true,
            invalidInfo: false,
          });
    }
  };

  const loginResult = async (email: string, password: string) => {
    const isLoginSuccess = signInApi(email, password);
    if (await isLoginSuccess) {
      router.push('/');
    } else {
      setSignInError({
        invalidEmail: false,
        invalidInfo: true,
      });
    }
  };

  return (
    <form>
      <FormInput ref={emailRef} placeholder='이메일' position='top' />
      <FormInput type='password' ref={passwordRef} placeholder='비밀번호' position='bottom' />
      <ButtonWrapper>
        <Button type='button' onClick={handleClick}>
          로그인
        </Button>
      </ButtonWrapper>
      {signInError.invalidEmail && <ErrorText>올바른 이메일 형식을 입력해주세요.</ErrorText>}
      {signInError.invalidInfo && <ErrorText>이메일 또는 비밀번호를 다시 확인해주세요.</ErrorText>}
      <LinkWrapper>
        <Link href={''}>비밀번호 재설정</Link>
        <Link href={'/signup'}>회원가입</Link>
      </LinkWrapper>
    </form>
  );
};

export default SignInEmail;

const FormInput = styled.input<{ position: 'top' | 'bottom' }>`
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #b7b7b7;
  border-radius: ${(props) => (props.position === 'top' ? '4px 4px 0 0' : '0 0 4px 4px')};
  box-sizing: border-box;
  font-size: 1rem;
  &:focus {
    outline-color: var(--main-color);
  }
`;

const ButtonWrapper = styled.div`
  margin: 15px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 13px;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  background-color: var(--main-color);
  font-size: 1rem;
  color: #ffff;
  cursor: pointer;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 0.9rem;
`;

const ErrorText = styled.p`
  margin-bottom: 20px;
  color: red;
  text-align: center;
  line-height: 20px;
  font-size: 0.9rem;
`;
