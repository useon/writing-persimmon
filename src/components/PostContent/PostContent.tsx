'use client';

import { styled } from 'styled-components';

import Button from '../common/Button/Button';
import PostComments from '../PostComments/PostComments';
import { CommentType, PostType } from '@/types/postType';
import { calculateHoursAgo } from '@/utils/calculateHoursAgo';

interface Props {
  title: string;
  topic?: string;
  user_id: string;
  issue?: 'today' | 'free';
  like: number;
  view?: number;
  content: string;
  created_at: string;
  comments: CommentType[] | {}[];
}

const PostContent = ({
  title,
  topic,
  user_id,
  issue,
  like,
  view,
  content,
  created_at,
  comments,
}: Props) => {
  return (
    <Main>
      <Container>
        <Header>
          <TitleWrapper>
            <H1>{title}</H1>
            <TodayTitle>{topic}</TodayTitle>
          </TitleWrapper>
          <Info>
            <AuthorName>{user_id}</AuthorName>
            <AuthorTime>{calculateHoursAgo(created_at)}</AuthorTime>
          </Info>
          <TagWrapper>
            <Tag issue={issue}>{issue === 'today' ? '오늘의 주제' : '자유 주제'}</Tag>
          </TagWrapper>
        </Header>
        <Body>
          <Text dangerouslySetInnerHTML={{ __html: content }}></Text>
          <UserAction>
            <Stat>
              <li>
                <span>좋아요</span>
                <span>{like}</span>
              </li>
              <li>
                <span>댓글</span>
                <span>{comments.length}</span>
              </li>
              <li>
                <span>조회</span>
                <span>{view}</span>
              </li>
            </Stat>
            <section>
              <header>
                <h4>댓글 {comments.length}</h4>
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
              <PostComments comments={comments as CommentType[]} />
            </section>
          </UserAction>
        </Body>
      </Container>
    </Main>
  );
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
