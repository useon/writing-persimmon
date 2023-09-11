import { styled } from 'styled-components';

import { CommentType } from '@/types/postType';
import { calculateHoursAgo } from '@/utils/calculateHoursAgo';

const PostComment = ({ comment_content, comment_user_id, created_at }: CommentType) => {
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
