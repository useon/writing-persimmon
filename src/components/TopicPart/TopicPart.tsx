'use client';

import React, { useState, useEffect, useCallback } from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import Button from '../common/Button/Button';
import { getTopicByDateApi } from '@/apis/topic/get-topic-by-date-api';
import { topicIdAtom } from '@/stores/topicIdAtom';
import { getTodayAndTomorrow } from '@/utils/getTodayAndTomorrow';
import writeIcon from 'assets/images/write-icon.svg';

interface Props {
  type: 'today' | 'last';
}

const TopicPart = ({ type }: Props) => {
  const [topic, setTopic] = useState('');
  const [topicId, setTopicId] = useAtom(topicIdAtom);
  const [currentArray, tomorrowArray] = getTodayAndTomorrow();

  const getTopic = useCallback(async () => {
    const getTopic = await getTopicByDateApi(currentArray, tomorrowArray);
    setTopic(getTopic[0] ? (getTopic[0].name as string) : '');
    setTopicId(getTopic[0] ? getTopic[0].id : 0);
  }, [currentArray, setTopicId, tomorrowArray]);

  useEffect(() => {
    getTopic();
  }, [getTopic]);

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
    line-height: 1.3;
  }
`;
