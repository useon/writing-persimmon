import React, { useState, useEffect, useCallback } from 'react';

import { getTopicByRangeApi } from '@/apis/topic/get-topic-api-by-range';
import { TopicsDataType, TopicType } from '@/types/topicType';

interface Props {
  limit: number;
  MAX_PAGE_COUNT: number;
}

export const usePagination = ({ limit, MAX_PAGE_COUNT }: Props) => {
  const [data, setData] = useState<TopicType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageArray, setPageArray] = useState<number[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const getTopicByRange = useCallback(async () => {
    const from = currentPage * limit;
    let to = from + limit - 1;
    if (totalCount !== 0) {
      to = from + limit - 1 > totalCount ? totalCount : from + limit - 1;
    }
    const topicData = await getTopicByRangeApi(from, to);
    const { topics, count } = topicData as TopicsDataType;
    setData(topics);
    setTotalCount(count);
  }, [currentPage, limit, totalCount]);

  const getPageArray = useCallback(() => {
    const firstNum = currentPage - (currentPage % MAX_PAGE_COUNT) + 1;
    let lastNum = currentPage - (currentPage % MAX_PAGE_COUNT) + MAX_PAGE_COUNT;
    const lastPage = Math.ceil(totalCount / limit);
    if (lastNum > lastPage) {
      lastNum = lastPage;
    }

    const arr = [];
    for (let i = firstNum; i <= lastNum; i++) {
      arr.push(i);
    }

    setPageArray(arr);
  }, [MAX_PAGE_COUNT, currentPage, limit, totalCount]);

  const handlePrevClick = (type?: string) => {
    if (currentPage - 1 < 0) return;

    if (type === 'first') {
      setCurrentPage(0);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextClick = (type?: string) => {
    const lastPage = Math.ceil(totalCount / limit);
    if (currentPage + 1 >= lastPage) return;

    if (type === 'last') {
      setCurrentPage(lastPage - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getPageArray();
    getTopicByRange();
  }, [getPageArray, getTopicByRange]);

  return { pageArray, data, handlePrevClick, handleNextClick, currentPage, setCurrentPage };
};
