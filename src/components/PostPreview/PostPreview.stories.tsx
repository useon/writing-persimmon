import PostPreview from './PostPreview';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostPreview> = {
  title: 'Component/PostPreview',
  component: PostPreview,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '제목',
    user_id: 'user_id',
    created_at: '2023-08-19',
    view: 0,
    content: '본문',
    like: 0,
    comments: [],
  },
};

export default meta;
