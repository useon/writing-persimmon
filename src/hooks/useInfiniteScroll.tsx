import React, { useCallback } from 'react';

import { PostType } from '@/types/postType';

interface Props {
  data: PostType[];
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const getPostList = (data: PostType[], page: number): PostType[] => {
  return data.filter((post: PostType) => post.page === page);
};

export const useInfiniteScroll = ({ data, posts, setPosts, page, setPage }: Props) => {
  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;
    if (Math.ceil(scrollTop + innerHeight) >= scrollHeight) {
      setPosts(posts.concat(getPostList(data, page + 1)));
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [data, page, posts, setPage, setPosts]);
  return handleScroll;
};
