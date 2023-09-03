import PostContent from '@/components/PostContent/PostContent';

const PostPage = ({ params }: { params: { postId: number } }) => {
  return <PostContent postNumber={params.postId} />;
};

export default PostPage;
