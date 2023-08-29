import React, { useCallback, useState, useEffect } from 'react';

import { getPostByTopicIdApi } from '@/apis/post/get-post-by-topic-id-api';
import { PostType } from '@/types/postType';

interface Props {
  topicId: number;
  setIsInView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useInfiniteScroll = ({ topicId, setIsInView }: Props) => {
  const PAGE_COUNT = 3;
  const [offset, setOffset] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedPosts, setLoadedPosts] = useState<PostType[]>([]);
  const [isLast, setLast] = useState(false);

  const fetchPosts = useCallback(
    async (offset: number) => {
      const from = offset * PAGE_COUNT;
      const to = from + PAGE_COUNT - 1;
      return await getPostByTopicIdApi(from, to, topicId);
    },
    [topicId],
  );

  const loadMorePost = useCallback(
    async (offset: number) => {
      setIsLoading(true);
      setOffset((prev) => prev + 1);
      const newPosts = await fetchPosts(offset);
      if (newPosts.length > 0) {
        setLoadedPosts((prevPosts: any) => [...prevPosts, ...newPosts]);
      } else {
        setLast(true);
      }
      setIsLoading(false);
      setIsInView(false);
    },
    [fetchPosts, setIsInView],
  );

  useEffect(() => {
    const getPost = async () => {
      const posts = await fetchPosts(0);
      console.log(posts);
      setLoadedPosts(posts);
    };
    getPost();
  }, [fetchPosts]);

  const scrollInformation = {
    offset,
    isLoading,
    loadedPosts,
    isLast,
  };

  return [scrollInformation, loadMorePost] as const;
};
