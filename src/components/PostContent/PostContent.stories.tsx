import PostContent from './PostContent';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostContent> = {
  title: 'Component/PostContent',
  component: PostContent,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    postNumber: 1,
  },
};

export default meta;
