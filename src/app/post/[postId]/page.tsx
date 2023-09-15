import { getPostByIdApi } from '@/apis/post/get-post-by-id-api';
import PostContent from '@/components/PostContent/PostContent';

const PostPage = async ({ params }: { params: { postId: number } }) => {
  const resultPostData = await getPostByIdApi(params.postId);

  return <PostContent postData={resultPostData[0]} />;
};

export default PostPage;
