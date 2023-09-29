'use client';

import Link from 'next/link';

import styled from 'styled-components';

import SignUpWithID from '../SignUpWithID/SignUpWithID';

const SignUpContent = () => {
  return (
    <Container>
      <SignUpWithID />
      <SignInWrapper>
        <p>이미 아이디가 있으신가요?</p>
        <Link href={'/signin'}>로그인</Link>
      </SignInWrapper>
    </Container>
  );
};

export default SignUpContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: 60px auto 0 auto;
`;

const SignInWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
