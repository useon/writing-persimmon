'use client';

import { JSX } from 'react';

import { styled } from 'styled-components';

import PostComment from '../PostComment/PostComment';
import { CommentType } from '@/types/postType';

interface Props {
  comments: CommentType[];
}

const PostComments = ({ comments }: Props) => {
  const result: JSX.Element[] = [];
  comments.map((data) =>
    result.push(
      <PostComment
        key={data.id}
        id={data.id}
        created_at={data.created_at}
        comment_user_id={data.comment_user_id}
        comment_content={data.comment_content}
        post_id={data.post_id}
      />,
    ),
  );
  return <Comments>{result}</Comments>;
};

export default PostComments;

const Comments = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 30px 0;
`;
