import PostPreviewsSection from './PostPreviewsSection';
import TopicPart from '../TopicPart/TopicPart';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostPreviewsSection> = {
  title: 'Component/PostPreviewsSection',
  component: PostPreviewsSection,
};

type Story = StoryObj<typeof meta>;

const TopicStory = () => {
  return (
    <PostPreviewsSection>
      <TopicPart date='today' topic='주제' />
    </PostPreviewsSection>
  );
};

export const Topic: Story = {
  render: () => <TopicStory />,
};

const AllStory = () => {
  return <PostPreviewsSection />;
};

export const All: Story = {
  render: () => <AllStory />,
};

export default meta;
