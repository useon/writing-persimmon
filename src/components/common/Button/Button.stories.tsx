import Button from './Button';
import WriteIcon from 'assets/images/write-icon.svg';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
};

type Story = StoryObj<typeof meta>;

export const Write: Story = {
  render: () => (
    <Button type='write' padding='10px 13px' color='default'>
      <WriteIcon width={15} />이 글감으로 글쓰기
    </Button>
  ),
};

export const Default: Story = {
  args: {
    children: '내용',
    weight: 'bold',
  },
};

export default meta;
