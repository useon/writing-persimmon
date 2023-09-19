'use client';

import { useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

import { getTopicByIdApi } from '@/apis/topic/get-topic-by-id-api';
import PostPreviewsSection from '@/components/PostPreviewsSection/PostPreviewsSection';
import TopicPart from '@/components/TopicPart/TopicPart';

const LastPage = () => {
  const searchParams = useSearchParams();
  const topicDate = searchParams.get('date');
  const topicId = searchParams.get('id');
  const [topic, setTopic] = useState('');

  const getTopicData = useCallback(async () => {
    const getTopic = await getTopicByIdApi(parseInt(topicId!, 10));
    setTopic(getTopic[0] ? (getTopic[0].name as string) : '');
  }, [topicId]);

  useEffect(() => {
    getTopicData();
  }, [getTopicData]);

  return (
    <>
      <PostPreviewsSection topicId={parseInt(topicId!, 10)}>
        <TopicPart date={topicDate!} topic={topic} />
      </PostPreviewsSection>
    </>
  );
};

export default LastPage;
