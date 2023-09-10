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
      <TopicPart type='today' />
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
