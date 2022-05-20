import axios from "axios";
import Link from "next/link";

const blog = (posts) => {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="font-bold">All Posts</h1>
        {posts.posts.data.map(post => (
        <Link href={"/blog/"+post.id}>{post.attributes.title}</Link>
    ))}
      </div>
  )
}

export default blog;

export async function getStaticProps(){
    const postsRes = await axios.get("https://teise-strapi-backend.herokuapp.com/api/posts");
    return{
        props: {
            posts: postsRes.data,
        }
    }
}