import React from 'react';

import { getTopicByDateApi } from '@/apis/topic/get-topic-by-date-api';
import PostPreviewsSection from '@/components/PostPreviewsSection/PostPreviewsSection';
import TopicPart from '@/components/TopicPart/TopicPart';
import { getTodayAndTomorrow } from '@/utils/getTodayAndTomorrow';

export default async function Home() {
  const [currentArray, tomorrowArray] = getTodayAndTomorrow();
  const getTopic = await getTopicByDateApi(currentArray, tomorrowArray);
  const topic = getTopic[0] ? (getTopic[0].name as string) : '';
  const topicId = getTopic[0] ? getTopic[0].id : 0;

  return (
    <>
      <PostPreviewsSection topicId={topicId}>
        <TopicPart date='today' topic={topic} />
      </PostPreviewsSection>
    </>
  );
}
