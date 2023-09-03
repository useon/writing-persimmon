import React, { useCallback, useEffect, useRef } from 'react';

import { debounce } from 'lodash';
import styled from 'styled-components';

import PostPreview from '../PostPreview/PostPreview';
import { PostType } from '@/types/postType';

interface Props {
  type: 'all' | 'topic';
  isInView: boolean;
  setIsInView: React.Dispatch<React.SetStateAction<boolean>>;
  scrollInformation: ScrollInformationType;
  loadMorePost: (arg: number) => void;
}

type ScrollInformationType = {
  offset: number;
  isLoading: boolean;
  loadedPosts: PostType[];
  isLast: boolean;
};

const PostPreviewList = ({
  type,
  isInView,
  setIsInView,
  scrollInformation,
  loadMorePost,
}: Props) => {
  const containerRef = useRef<HTMLInputElement>(null);

  const handleScroll = useCallback(
    (container: React.RefObject<HTMLInputElement>) => {
      if (containerRef.current && typeof window !== 'undefined') {
        const { bottom } = containerRef.current.getBoundingClientRect();
        const { innerHeight } = window;
        setIsInView(bottom <= innerHeight);
      }
    },
    [setIsInView],
  );

  useEffect(() => {
    const handleDebouncedScroll = debounce(() => handleScroll(containerRef), 200);
    window.addEventListener('scroll', handleDebouncedScroll);
    return () => {
      window.removeEventListener('scroll', handleDebouncedScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (isInView && !scrollInformation.isLast) {
      loadMorePost(scrollInformation.offset);
    }
  }, [isInView, loadMorePost, scrollInformation.isLast]);

  return (
    <Container ref={containerRef}>
      {scrollInformation.loadedPosts.map((post: PostType) => (
        <PostPreview
          key={post.id}
          id={post.id!}
          title={post.title}
          user_id={post.user_id}
          created_at={post.created_at}
          view={post.view!}
          content={post.content}
          like={post.like}
          comments={post.comments}
          issue={post.issue}
          type={type}
        />
      ))}
      {scrollInformation.isLoading ? <h3 style={{ marginTop: '20px' }}>로딩중...</h3> : null}
      {scrollInformation.isLast ? <h3 style={{ marginTop: '20px' }}>마지막입니다.</h3> : null}
    </Container>
  );
};

export default PostPreviewList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 863px;
  padding: 35px 50px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  box-sizing: border-box;
`;
