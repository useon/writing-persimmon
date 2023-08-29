import React from 'react';

import { getTopicApi } from '@/apis/topic/get-topic-api';
import PostPreviewsSection from '@/components/PostPreviewsSection/PostPreviewsSection';
import TopicPart from '@/components/TopicPart/TopicPart';
import { getTodayAndTomorrow } from '@/utils/getTodayAndTomorrow';

const [currentArray, tomorrowArray] = getTodayAndTomorrow();

const getTopic = async () => {
  return await getTopicApi(currentArray, tomorrowArray);
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const topic = await getTopic();
  let id = 0;
  let name = '';

  // topic이 안받아와질 때 예외처리 임시
  if (topic.length !== 0) {
    id = topic[0].id;
    name = topic[0].name;
  }

  return (
    <>
      <PostPreviewsSection topicId={id}>
        <TopicPart type='today' topic={name} />
      </PostPreviewsSection>
    </>
  );
}
