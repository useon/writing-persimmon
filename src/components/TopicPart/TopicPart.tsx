import React from 'react';

import writeIcon from 'assets/images/write-icon.svg';
import styled from 'styled-components';

import Button from '../common/Button/Button';

interface Props {
  type: 'today' | 'last';
  topic: string;
}

const TopicPart = ({ type, topic }: Props) => {
  return (
    <Container>
      <span className='topic-type '>{type === 'today' ? '오늘의 ' : ''}글감</span>
      <h1 className='topic'>“ {topic} ”</h1>
      <Button type='write' url={writeIcon.src} padding='14px 17px' color='default' size={0.8}>
        이 글감으로 글쓰기
      </Button>
    </Container>
  );
};

export default TopicPart;

const Container = styled.div`
  margin: 65px 0px;
  text-align: center;

  .topic-type {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--main-color);
  }

  .topic {
    font-size: 2.2rem;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 50px;
  }
`;
