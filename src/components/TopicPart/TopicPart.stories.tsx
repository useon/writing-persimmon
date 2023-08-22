import TopicPart from './TopicPart';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TopicPart> = {
  title: 'Component/TopicPart',
  component: TopicPart,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'today',
    topic: '주제',
  },
};

export default meta;
