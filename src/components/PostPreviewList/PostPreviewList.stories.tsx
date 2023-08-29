import React, { useState } from 'react';

import PostPreviewList from './PostPreviewList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostPreviewList> = {
  title: 'Component/PostPreviewList',
  component: PostPreviewList,
};

type Story = StoryObj<typeof meta>;

type Type = 'topic' | 'all';

const TopicStory = () => {
  const [isInView, setIsInView] = useState(false);
  const [scrollInformation, loadMorePost] = useInfiniteScroll({
    topicId: 1,
    setIsInView: setIsInView,
  });

  const type = 'topic' as Type;
  const props = { type: type, isInView, setIsInView, scrollInformation, loadMorePost };

  return <PostPreviewList {...props} />;
};

export const Defalut: Story = {
  render: () => <TopicStory />,
};

const AllStory = () => {
  const [isInView, setIsInView] = useState(false);
  const [scrollInformation, loadMorePost] = useInfiniteScroll({
    setIsInView: setIsInView,
  });

  const type = 'all' as Type;
  const props = { type: type, isInView, setIsInView, scrollInformation, loadMorePost };

  return <PostPreviewList {...props} />;
};

export const All: Story = {
  render: () => <AllStory />,
};

export default meta;
