import React from 'react';

import styled from 'styled-components';

const SelectDropdoqMenu = () => {
  return (
    <Container id='select-drop'>
      <Text>오늘의 글감으로 글쓰기</Text>
      <Text>자유주제로 글쓰기</Text>
    </Container>
  );
};

export default SelectDropdoqMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: absolute;
  top: 100%;
  right: 0px;
  width: 170px;
  padding: 22px 15px;
  border: 1px solid #dedede;
  border-radius: 8px;
  background: #fff;
  transform: translate(10%, 8px);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Text = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;
