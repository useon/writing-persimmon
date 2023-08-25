import React, { useEffect, useState, useCallback } from 'react';

import styled from 'styled-components';

import PostPreview from '../PostPreview/PostPreview';
import { useInfiniteScroll, getPostList } from '@/hooks/useInfiniteScroll';
import { PostType } from '@/types/postType';

interface Props {
  data: PostType[];
}

const PostPreviewList = ({ data }: Props) => {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<PostType[]>(getPostList(data, 1));

  const handleScroll = useInfiniteScroll({ data, posts, setPosts, page, setPage });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  useEffect(() => {
    setPosts(getPostList(data, 1));
  }, [data]);

  return (
    <Container>
      {posts.map((post: PostType) => (
        <PostPreview
          key={post.id}
          title={post.title}
          user_id={post.user_id}
          date={post.date}
          view={post.view}
          content={post.content}
          like={post.like}
          comment={post.comment}
        />
      ))}
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
