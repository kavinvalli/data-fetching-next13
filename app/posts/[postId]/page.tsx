import { Post } from "@/lib/types";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// params: {
//   postId: aksdjlkjasd
// }

export const revalidate = 3600;

export const generateStaticParams = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 3600,
    },
  });
  const posts = await data.json();

  return posts.map((post: Post) => ({
    params: {
      postId: post.id.toString(),
    },
  }));
};

const getPost = async (id: string): Promise<Post> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await data.json();

  return post;
};

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) {
  const post = await getPost(postId);
  return (
    <div className={inter.className}>
      <h1>{post.title}</h1>
      <p>Post ID: {postId}</p>
      <p>{post.body}</p>
    </div>
  );
}
