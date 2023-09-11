import React from 'react';

import PostPreviewsSection from '@/components/PostPreviewsSection/PostPreviewsSection';
import TopicPart from '@/components/TopicPart/TopicPart';

export default function Home() {
  return (
    <>
      <PostPreviewsSection>
        <TopicPart type='today' />
      </PostPreviewsSection>
    </>
  );
}
