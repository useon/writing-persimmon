'use client';

import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import { getPostByIdApi } from '@/apis/post/get-post-by-id-api';
import { calculateHoursAgo } from '@/utils/calculateHoursAgo';

interface Props {
  postNumber?: number;
}

const PostContent = ({ postNumber }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState<any>();

  useEffect(() => {
    const postId = Number(postNumber);
    getPost(postId);
  }, []);

  const getPost = async (postId: number) => {
    const postData = await getPostByIdApi(postId);
    setPostData(postData[0]);
    setIsLoading(true);
  };

  const paintContent = () => {
    const elapsedTime = calculateHoursAgo(postData.created_at);
    return (
      <Main>
        <Container>
          <Header>
            <TitleWrapper>
              <H1>{postData.title}</H1>
              <TodayTitle>{postData.topic}</TodayTitle>
            </TitleWrapper>
            <Info>
              <AuthorName>{postData.user_id}</AuthorName>
              <AuthorTime>{elapsedTime}</AuthorTime>
            </Info>
            <TagWrapper>
              <Tag issue={postData.issue}>
                {postData.issue === 'today' ? '오늘의 주제' : '자유 주제'}
              </Tag>
            </TagWrapper>
          </Header>
          <Content dangerouslySetInnerHTML={{ __html: postData.content }}></Content>
        </Container>
      </Main>
    );
  };

  return isLoading ? paintContent() : <></>;
};

export default PostContent;

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 865px;
`;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 90%;
  margin-top: 60px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  margin: 10px 0;
`;

const TodayTitle = styled.span`
  color: var(--sub-color);
`;

const Info = styled.div`
  padding: 15px 0;
`;

const AuthorName = styled.span`
  font-weight: 900;
`;

const AuthorTime = styled.span`
  margin-left: 20px;
`;

const TagWrapper = styled.div`
  display: flex;
`;

const Tag = styled.span<{ issue?: 'today' | 'free' }>`
  padding: 5px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.issue === 'today' ? 'var(--main-color)' : 'var(--dark-color)'};
  color: #ffffff;
`;

const Content = styled.section`
  flex-grow: 19;
  line-height: 1.5;
`;
