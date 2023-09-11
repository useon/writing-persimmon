'use client';

import React, { useState } from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import PostPreviewList from '../PostPreviewList/PostPreviewList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { topicIdAtom } from '@/stores/topicIdAtom';

interface Props {
  children?: React.ReactNode;
}

const PostPreviewsSection = ({ children }: Props) => {
  const [filterType, setFilterType] = useState('popularity');
  const [isInView, setIsInView] = useState(false);
  const [topicId, setTopicId] = useAtom(topicIdAtom);

  const [scrollInformation, loadMorePost] = useInfiniteScroll({
    topicId: topicId ? topicId : 0,
    setIsInView: setIsInView,
  });

  const type = children ? 'topic' : ('all' as 'topic' | 'all');
  const props = { type: type, isInView, setIsInView, scrollInformation, loadMorePost };

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
      {children}
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
        <PostPreviewList {...props} />
      </div>
    </Container>
  );
};

export default PostPreviewsSection;

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
