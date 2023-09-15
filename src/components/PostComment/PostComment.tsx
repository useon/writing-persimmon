import { styled } from 'styled-components';

import { calculateHoursAgo } from '@/utils/calculateHoursAgo';

interface Props {
  comment_content: string;
  comment_user_id: string;
  created_at: string;
}

const PostComment = ({ comment_content, comment_user_id, created_at }: Props) => {
  return (
    <Comment>
      <UserId>{comment_user_id}</UserId>
      <Content>{comment_content}</Content>
      <span>{calculateHoursAgo(created_at)}</span>
    </Comment>
  );
};

export default PostComment;

const Comment = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

const UserId = styled.span`
  font-weight: 700;
`;

const Content = styled.p`
  overflow-wrap: break-word;
  line-height: 24px;
  word-break: break-all;
`;
