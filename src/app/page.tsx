import React from 'react';

import { getTopicApi } from './apis/topic/get-topic-api';
import PostPreviewsSection from '@/components/PostPreviewsSection/PostPreviewsSection';
import TopicPart from '@/components/TopicPart/TopicPart';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const currentArray = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
const tomorrowArray = [tomorrow.getFullYear(), tomorrow.getMonth() + 1, tomorrow.getDate()];

const getTopic = async () => {
  return await getTopicApi(currentArray, tomorrowArray);
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const topic = await getTopic();
  let { id, name } = topic[0];

  // topic이 안받아와질 때 예외처리 임시
  if (topic.length === 0) {
    id = 0;
    name = '';
  }

  return (
    <>
      <PostPreviewsSection topic_id={id}>
        <TopicPart type='today' topic={name} />
      </PostPreviewsSection>
    </>
  );
}
