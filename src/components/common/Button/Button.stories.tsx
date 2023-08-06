import Button from './Button';
import writeIcon from '../../../../public/assets/images/write-icon.svg';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
};

type Story = StoryObj<typeof meta>;

export const Write: Story = {
  render: () => (
    <Button type='write' url={writeIcon.src} padding='10px 13px' color='default'>
      이 글감으로 글쓰기
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
