import axios from "axios";
import Link from "next/link";

const blog = (posts) => {
  return (
      <div className="text-3xl font-bold gap-10 h-screen flex flex-col justify-center items-center self-center">
        <div className="flex flex-col items-center">
            <Link href="/blogposts/0"><a className="font-bold">{posts.posts.data[0].attributes.title}</a></Link>
            <p className="text-xl font-normal font-gray-500">{posts.posts.data[0].attributes.desc}</p>
        </div>
        <div className="flex flex-col items-center">
            <Link href="/blogposts/1"><a className="font-bold">{posts.posts.data[1].attributes.title}</a></Link>
            <p className="text-xl font-normal font-gray-500">{posts.posts.data[1].attributes.desc}</p>
        </div>
      </div>
  )
}

export default blog;

export async function getServerSideProps(){
    const postsRes = await axios.get("https://teise-strapi-backend.herokuapp.com/api/posts");
    return{
        props: {
            posts: postsRes.data,
        }
    }
}