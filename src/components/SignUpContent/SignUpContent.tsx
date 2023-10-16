'use client';

import Link from 'next/link';

import styled from 'styled-components';

import SignUpWithEmail from '../SignUpWithEmail/SignUpWithEmail';

const SignUpContent = () => {
  return (
    <Container>
      <Header>회원가입</Header>
      <SignUpWithEmail />
      <SignInWrapper>
        <p>이미 계정이 있으신가요?</p>
        <Link href={'/signin'}>로그인</Link>
      </SignInWrapper>
    </Container>
  );
};

export default SignUpContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  margin: 60px auto 0 auto;
`;

const Header = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`;

const SignInWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
