import { Header } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Common/Header',
  component: Header,
};

type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  render: () => <Header />,
};

export default meta;
