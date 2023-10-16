import Link from 'next/link';

import { styled } from 'styled-components';

const signUpModal = () => {
  return (
    <ModalWrapper>
      <Modal>
        <ModalContent>
          <InfoText>회원가입이 완료되었습니다.</InfoText>
          <Link href={'/signin'} as={'signin'}>
            <Button type='button'>확인</Button>
          </Link>
        </ModalContent>
      </Modal>
    </ModalWrapper>
  );
};

export default signUpModal;

const ModalWrapper = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding-top: 300px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
  width: 300px;
  height: 200px;
  margin: 0 auto;
  padding: 30px 30px;
  border-radius: 10px;
  background-color: #fff;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const InfoText = styled.p`
  margin-top: 50px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  width: 80px;
  padding: 12px 0;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  background-color: var(--main-color);
  color: #ffff;
  font-size: 1.2rem;
  cursor: pointer;
`;
