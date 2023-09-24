import React, { useState, useEffect, useCallback } from 'react';

import { getTopicByRangeApi } from '@/apis/topic/get-topic-by-range-api';
import { TopicsDataType, TopicType } from '@/types/topicType';

interface Props {
  LIMIT: number;
  MAX_PAGE_COUNT: number;
}

export const usePagination = ({ LIMIT, MAX_PAGE_COUNT }: Props) => {
  const [data, setData] = useState<TopicType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageArray, setPageArray] = useState<number[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const getTopicByRange = useCallback(async () => {
    const from = currentPage * LIMIT;
    let to = from + LIMIT - 1;
    if (totalCount !== 0) {
      to = from + LIMIT - 1 > totalCount ? totalCount : from + LIMIT - 1;
    }
    const topicData = await getTopicByRangeApi(from, to);
    const { topics, count } = topicData as TopicsDataType;
    setData(topics);
    setTotalCount(count);
  }, [currentPage, LIMIT, totalCount]);

  const getPageArray = useCallback(() => {
    const firstNum = currentPage - (currentPage % MAX_PAGE_COUNT) + 1;
    let lastNum = currentPage - (currentPage % MAX_PAGE_COUNT) + MAX_PAGE_COUNT;
    const lastPage = Math.ceil(totalCount / LIMIT);
    if (lastNum > lastPage) {
      lastNum = lastPage;
    }

    const arr = [];
    for (let i = firstNum; i <= lastNum; i++) {
      arr.push(i);
    }

    setPageArray(arr);
  }, [MAX_PAGE_COUNT, currentPage, LIMIT, totalCount]);

  const handlePrevClick = (type?: string) => {
    if (currentPage - 1 < 0) return;

    if (type === 'first') {
      setCurrentPage(0);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextClick = (type?: string) => {
    const lastPage = Math.ceil(totalCount / LIMIT);
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
