'use client';

import styled from 'styled-components';

const PostPage = () => {
  return (
    <Main>
      <Container>
        <Header>
          <TitleWrapper>
            <H1>세상의 바닷물이 달콤해진다면</H1>
            <TodayTitle>바닷물이 달콤하다면?</TodayTitle>
          </TitleWrapper>
          <Info>
            <AuthorName>testId</AuthorName>
            <AuthorTime>2023년 8월 31일</AuthorTime>
          </Info>
          <TagWrapper>
            <Tag>오늘의 주제</Tag>
          </TagWrapper>
        </Header>
        <Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem fugit,
            dignissimos facere quis consequuntur pariatur ducimus adipisci culpa sed provident
            quibusdam praesentium? Nesciunt ducimus totam veniam amet, quas officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem fugit,
            dignissimos facere quis consequuntur pariatur ducimus adipisci culpa sed provident
            quibusdam praesentium? Nesciunt ducimus totam veniam amet, quas officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem fugit,
            dignissimos facere quis consequuntur pariatur ducimus adipisci culpa sed provident
            quibusdam praesentium? Nesciunt ducimus totam veniam amet, quas officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem fugit,
            dignissimos facere quis consequuntur pariatur ducimus adipisci culpa sed provident
            quibusdam praesentium? Nesciunt ducimus totam veniam amet, quas officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem fugit,
            dignissimos facere quis consequuntur pariatur ducimus adipisci culpa sed provident
            quibusdam praesentium? Nesciunt ducimus totam veniam amet, quas officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem fugit,
            dignissimos facere quis consequuntur pariatur ducimus adipisci culpa sed provident
            quibusdam praesentium? Nesciunt ducimus totam veniam amet, quas officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem fugit,
            dignissimos facere quis consequuntur pariatur ducimus adipisci culpa sed provident
            quibusdam praesentium? Nesciunt ducimus totam veniam amet, quas officiis?
          </p>
        </Content>
      </Container>
    </Main>
  );
};

export default PostPage;

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

const Tag = styled.span`
  padding: 5px;
  border-radius: 30px;
  background-color: var(--main-color);
  color: #ffffff;
`;

const Content = styled.section`
  flex-grow: 19;
  line-height: 1.5;
`;
