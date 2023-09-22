import Link from 'next/link';

import { styled } from 'styled-components';

const SignInEmail = () => {
  return (
    <form>
      <FormInput placeholder='이메일' position='top' />
      <FormInput placeholder='비밀번호' position='bottom' />
      <ButtonWrapper>
        <Button type='button'>로그인</Button>
      </ButtonWrapper>
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
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 0.9rem;
`;
