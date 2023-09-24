'use client';

import React from 'react';

import styled from 'styled-components';

import Button from '../common/Button/Button';
import writeIcon from 'assets/images/write-icon.svg';

interface Props {
  date: string;
  topic: string;
}

const TopicPart = ({ date, topic }: Props) => {
  return (
    <Container>
      <span className='topic-type '>{date === 'today' ? '오늘' : date}의 글감</span>
      <h1 className='topic'>“ {topic.replace(/'|"/g, '')} ”</h1>
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
    margin-top: 15px;
    margin-bottom: 50px;
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 1.3;
  }
`;
