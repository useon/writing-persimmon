'use client';

import { styled } from 'styled-components';

import SignInEmail from '../SignInEmail/SignInEmail';

const SignInContent = () => {
  return (
    <Container>
      <SignInEmail />
    </Container>
  );
};

export default SignInContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 300px auto 0 auto;
`;
