import { styled } from 'styled-components';

const SignUpWithID = () => {
  return (
    <Form>
      <Header>이메일로 회원가입</Header>
      <FormItem>
        <FormLebel>이메일</FormLebel>
        <FormInput placeholder='이메일' />
        <ButtonWrapper>
          <Button type='button' action='verify'>
            이메일 인증하기
          </Button>
        </ButtonWrapper>
      </FormItem>
      <FormItem>
        <FormLebel>비밀번호</FormLebel>
        <InfoText>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</InfoText>
        <FormInput placeholder='비밀번호' />
      </FormItem>
      <FormItem>
        <FormLebel>비밀번호 확인</FormLebel>
        <FormInput placeholder='비밀번호 확인' />
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

const Header = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
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
  margin: 12px 0;
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
  font-size: 0.88rem;
`;
