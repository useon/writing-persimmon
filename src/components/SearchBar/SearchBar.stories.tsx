import { useState } from 'react';

import SearchBar from './SearchBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchBar> = {
  title: 'Component/SearchBar',
  component: SearchBar,
};

type Story = StoryObj<typeof meta>;

const LastTopicSearchStory = () => {
  const [value, setValue] = useState('');
  return (
    <SearchBar
      value={value}
      setValue={setValue}
      size='normal'
      placeholder='글감을 입력해 주세요.'
    />
  );
};

export const LastTopicSearch: Story = {
  render: () => <LastTopicSearchStory />,
};

const TotalSearchStory = () => {
  const [value, setValue] = useState('');
  return (
    <SearchBar value={value} setValue={setValue} size='big' placeholder='검색어를 입력해 주세요.' />
  );
};

export const TotalSearch: Story = {
  render: () => <TotalSearchStory />,
};

export default meta;
