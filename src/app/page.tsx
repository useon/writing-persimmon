'use client';

import React, { useState } from 'react';

import styled from 'styled-components';

import PostPreviewList from '@/components/PostPreviewList/PostPreviewList';
import TopicPart from '@/components/TopicPart/TopicPart';

export default function Home() {
  const initalData = [
    {
      id: 1,
      title: '1내 의자는 밤에 무슨 생각을 할까?',
      user_id: 'testId',
      date: '2023-08-19 17:30:00',
      view: 10,
      content:
        '본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문 본문 긴 본문본문 긴 본문 본문 긴 본문',
      like: 3,
      page: 1,
      comment: 2,
    },
    {
      id: 2,
      title: '2내 의자는 밤에 무슨 생각을 할까?',
      user_id: 'testId2',
      date: '2023-08-19 12:30:00',
      view: 12,
      content: 'test 본문2222',
      like: 1,
      page: 1,
      comment: 4,
    },
    {
      id: 3,
      title: '3내 의자는 밤에 무슨 생각을 할까?',
      user_id: 'testId3',
      date: '2023-08-14 17:30:00',
      view: 10,
      content: 'test 본문33333333',
      like: 43,
      page: 1,
      comment: 20,
    },
    {
      id: 4,
      title: '4내 의자는 밤에 무슨 생각을 할까?',
      user_id: 'testId4',
      date: '2023-08-14 17:30:00',
      view: 10,
      content: 'test 본문4444',
      like: 43,
      page: 1,
      comment: 2,
    },
    {
      id: 5,
      title: '5내 의자는 밤에 무슨 생각을 할까?',
      user_id: 'testId3',
      date: '2023-08-14 17:30:00',
      view: 10,
      content: 'test 본문555',
      like: 43,
      page: 2,
      comment: 2,
    },
    {
      id: 6,
      title: '6내 의자는 밤에 무슨 생각을 할까?',
      user_id: 'testId3',
      date: '2023-08-14 17:30:00',
      view: 10,
      content: 'test 본문666',
      like: 43,
      page: 2,
      comment: 2,
    },
    {
      id: 7,
      title: '7내 의자는 밤에 무슨 생각을 할까?',
      user_id: 'testId3',
      date: '2023-08-14 17:30:00',
      view: 10,
      content: 'test 본문777',
      like: 43,
      page: 3,
      comment: 10,
    },
    {
      id: 8,
      title: '8내 의자는 밤에 무슨 생각을 할까?',
      user_id: 'testId3',
      date: '2023-08-14 17:30:00',
      view: 10,
      content: 'test 본문8',
      like: 43,
      page: 3,
      comment: 0,
    },
    {
      id: 9,
      title: '9내 의자는 밤에 무슨 생각을 할까?',
      user_id: 'testId3',
      date: '2023-08-14 17:30:00',
      view: 10,
      content: 'test 본문9',
      like: 43,
      page: 3,
      comment: 2,
    },
  ];

  const [postPreviewData, setPostPreviewData] = useState(initalData);
  const [filterType, setFilterType] = useState('popularity');

  const handleFilterClick = (type: string) => {
    if (type === 'popularity') {
      setFilterType('popularity');
    } else if (type === 'recent') {
      setFilterType('recent');
    } else {
      setFilterType('comment');
    }
  };

  return (
    <Container>
      <TopicPart type='today' topic='내 의자는 밤에 뭘 할까?' />
      <div className='post-wrapper'>
        <FilterBox>
          <FilterText
            onClick={() => handleFilterClick('popularity')}
            $select={filterType === 'popularity'}
          >
            인기순
          </FilterText>
          <FilterText onClick={() => handleFilterClick('recent')} $select={filterType === 'recent'}>
            최신순
          </FilterText>
          <FilterText
            onClick={() => handleFilterClick('comment')}
            $select={filterType === 'comment'}
          >
            댓글순
          </FilterText>
        </FilterBox>
        <PostPreviewList data={postPreviewData} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .post-wrapper {
    display: flex;
  }
`;

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 195px;
  height: 140px;
  margin-right: 13px;
  padding: 20px;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  box-sizing: border-box;
`;

const FilterText = styled.span<{ $select: boolean }>`
  padding: 5px 0px;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.$select ? 'var(--main-color)' : 'black')};
  cursor: pointer;
`;
