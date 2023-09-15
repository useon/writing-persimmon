import { getPostByIdApi } from '@/apis/post/get-post-by-id-api';
import PostContent from '@/components/PostContent/PostContent';
import { PostType } from '@/types/postType';

const PostPage = async ({ params }: { params: { postId: number } }) => {
  const resultPostData = await getPostByIdApi(params.postId);
  const postData = resultPostData[0] as PostType;

  return (
    <PostContent
      title={postData.title}
      topic={postData.topic}
      user_id={postData.user_id}
      issue={postData.issue}
      like={postData.like}
      view={postData.view}
      content={postData.content}
      comments={postData.comments}
      created_at={postData.created_at}
    />
  );
};

export default PostPage;
