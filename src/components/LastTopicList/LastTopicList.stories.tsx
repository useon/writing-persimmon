import LastTopicList from './LastTopicList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LastTopicList> = {
  title: 'Component/LastTopicList',
  component: LastTopicList,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <LastTopicList />,
};

export default meta;
