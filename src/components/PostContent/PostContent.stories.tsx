import PostContent from './PostContent';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostContent> = {
  title: 'Component/PostContent',
  component: PostContent,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '제목',
    topic: '주제',
    user_id: 'testId',
    issue: 'today',
    like: 1,
    view: 1,
    content: '본문',
    created_at: '2023-01-01T08:03:56.541616+00:00',
    comments: [],
  },
};

export default meta;
