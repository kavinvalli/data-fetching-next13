import { Post } from "@/lib/types";
import { Inter } from "next/font/google";
import Comp from "./Comp";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const getPosts = async (): Promise<Post[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return posts;
};

export default async function Posts() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className={inter.className}>
      <h1>Posts</h1>
      {/* @ts-expect-error Server Component */}
      <Comp />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={"/posts/" + post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
