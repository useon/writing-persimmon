import PostComment from './PostComment';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostComment> = {
  title: 'Component/PostComment',
  component: PostComment,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comment_content: '댓글내용',
    comment_user_id: 'userId',
    created_at: '2023-01-01T08:03:56.541616+00:00',
  },
};

export default meta;
