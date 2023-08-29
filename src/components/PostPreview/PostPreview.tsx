import Image from 'next/image';
import React from 'react';

import styled from 'styled-components';

import { CommentType } from '@/types/postType';
import { calculateHoursAgo } from '@/utils/calculateHoursAgo';
import commentIcon from 'assets/images/comment-icon.svg';
import likeIcon from 'assets/images/like-icon.svg';

interface Props {
  issue?: 'today' | 'free';
  title: string;
  user_id: string;
  created_at: string;
  view: number;
  content: string;
  like: number;
  comments: CommentType[] | {}[];
  type?: 'all' | 'topic';
}

const PostPreview = ({
  issue,
  title,
  user_id,
  created_at,
  view,
  content,
  like,
  comments,
  type,
}: Props) => {
  const elapsedTime = calculateHoursAgo(created_at);
  return (
    <Container>
      <TitleArea>
        <Title>{title}</Title>
        {type === 'all' ? (
          <Tag issue={issue}>
            <span>{issue === 'today' ? '오늘의' : '자유'} 주제</span>
          </Tag>
        ) : null}
        <PostInfoWrapper>
          <div>
            <span className='id'>{user_id}</span>
            <span className='gray-text'>{elapsedTime}</span>
          </div>
          <span className='gray-text'>조회수 {view}회</span>
        </PostInfoWrapper>
      </TitleArea>
      <Content>{content}</Content>
      <div className='post-comment'>
        <ReactionWrapper>
          <Image src={likeIcon.src} alt='like' width={15} height={15} />
          <span>{like}</span>
        </ReactionWrapper>
        <ReactionWrapper>
          <Image src={commentIcon.src} alt='comment' width={15} height={15} />
          <span>{comments.length}</span>
        </ReactionWrapper>
      </div>
    </Container>
  );
};

export default PostPreview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 50px;
  border-bottom: 1px solid #d4d4d4;
  cursor: pointer;

  .post-comment {
    display: flex;
    gap: 0px 13px;
  }
`;

const ReactionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
`;

const PostInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .id {
    margin-right: 13px;
    font-weight: bold;
    font-size: 1rem;
  }

  .gray-text {
    font-size: 0.875rem;
    color: var(--sub-color);
  }
`;

const Content = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 30px;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Tag = styled.div<{ issue?: 'today' | 'free' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  padding: 8px 5px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.issue === 'today' ? 'var(--main-color)' : 'var(--dark-color)'};
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
`;
