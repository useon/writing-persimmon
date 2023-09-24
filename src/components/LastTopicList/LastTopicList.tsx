'use client';

import Link from 'next/link';
import React from 'react';

import styled from 'styled-components';

import Pagination from '../Pagination/Pagination';
import { usePagination } from '@/hooks/usePagination';
import { convertDate } from '@/utils/convertDate';

const LastTopicList = () => {
  const LIMIT = 12;
  const MAX_PAGE_COUNT = 5;

  const { pageArray, data, handlePrevClick, handleNextClick, currentPage, setCurrentPage } =
    usePagination({
      LIMIT,
      MAX_PAGE_COUNT,
    });
  return (
    <Container>
      <div className='last-topics'>
        {data.map((topic) => {
          const date = convertDate(topic.created_at);
          return (
            <Link
              key={topic.id}
              href={{
                pathname: `/last/${topic.id}`,
                query: { date, id: topic.id },
              }}
            >
              <LastTopicWrapper>
                <LastTopicTitle>{topic.name.replace(/'|"/g, '')}</LastTopicTitle>
                <LastTopic color='var(--sub-color)'>{date}</LastTopic>
                <LastTopic>총 {topic.posts.length}개의 게시글</LastTopic>
              </LastTopicWrapper>
            </Link>
          );
        })}
      </div>
      <Pagination
        pageArray={pageArray}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default LastTopicList;

const Container = styled.div`
  min-height: 650px;

  .last-topics {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 80px 46px;
  }
`;

const LastTopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const LastTopicTitle = styled.span`
  margin-bottom: 25px;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.3;
`;

const LastTopic = styled.span<{ color?: string }>`
  font-size: 0.9rem;
  color: ${(props) => (props.color ? props.color : 'black')};
`;
