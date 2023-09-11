'use client';

import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import Button from '../common/Button/Button';
import PostComments from '../PostComments/PostComments';
import { getPostByIdApi } from '@/apis/post/get-post-by-id-api';
import { CommentType, PostType } from '@/types/postType';
import { calculateHoursAgo } from '@/utils/calculateHoursAgo';

interface Props {
  postNumber?: number;
}

const initialState = {
  issue: 'today' as 'today' | 'free',
  comment_id: 0,
  content: '',
  created_at: '',
  id: 0,
  like: 0,
  title: '',
  topic: '',
  topic_id: 0,
  type: '',
  user_id: '',
  comments: [],
};

const PostContent = ({ postNumber }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState<PostType>(initialState);

  useEffect(() => {
    const postId = Number(postNumber);
    getPost(postId);
  }, [postNumber]);

  const getPost = async (postId: number) => {
    const resultPostData = await getPostByIdApi(postId);
    setPostData(resultPostData[0]);
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
          <Body>
            <Text dangerouslySetInnerHTML={{ __html: postData.content }}></Text>
            <UserAction>
              <Stat>
                <li>
                  <span>좋아요</span>
                  <span>{postData.like}</span>
                </li>
                <li>
                  <span>댓글</span>
                  <span>{postData.comments.length}</span>
                </li>
                <li>
                  <span>조회</span>
                  <span>{postData.view}</span>
                </li>
              </Stat>
              <section>
                <header>
                  <h4>댓글 {postData.comments.length}</h4>
                </header>
                <form>
                  <CommentTextarea
                    title='댓글작성하기'
                    rows={4}
                    placeholder='글에 대한 감상과 생각을 댓글로 공유해주세요. 창작자에게 큰 영감이 됩니다 :)'
                  />
                  <ButtonArea>
                    <Button color='sub'>취소</Button>
                    <Button color='default'>작성</Button>
                  </ButtonArea>
                </form>
                <PostComments comments={postData.comments as CommentType[]} />
              </section>
            </UserAction>
          </Body>
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
  margin-top: 20px;
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

const Body = styled.section`
  flex-grow: 19;
  margin-top: 40px;
`;

const Text = styled.div`
  min-height: 70%;
  line-height: 1.5rem;
`;

const UserAction = styled.div``;

const Stat = styled.ul`
  display: flex;
  column-gap: 6px;
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border-style: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
  padding: 10px 0;
`;
