import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #dedede;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 22px 15px;
  position: absolute;
  width: 170px;
  right: 0px;
  top: 100%;
  transform: translate(10%, 8px);
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Text = styled.span`
  cursor: pointer;
  font-size: 1rem;
`;

export const SelectDropdoqMenu = () => {
  return (
    <Container id='select-drop'>
      <Text>오늘의 글감으로 글쓰기</Text>
      <Text>자유주제로 글쓰기</Text>
    </Container>
  );
};
