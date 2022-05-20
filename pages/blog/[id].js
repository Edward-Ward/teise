import axios from "axios";

const post = ({post}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <article className="flex flex-col items-center gap-10">
           <h1 className="font-bold font-3xl">{post.data.attributes.title}</h1>
           <p className="w-[60%]">{post.data.attributes.content}</p>
    </article>
    </div>
  )
}

export default post

export async function getStaticProps({params}){
 const postRes = await axios.get(`https://teise-strapi-backend.herokuapp.com/api/posts/${params.id}`)
 return{
     props: {
         post: postRes.data
     }
 }
}
export async function getStaticPaths(){
    const postsRes = await axios.get("https://teise-strapi-backend.herokuapp.com/api/posts/");
    const paths = postsRes.data.data.map((post) => {
        return{
            params: {id: post.id.toString()}
        }
    }) //post.id
    return{
        paths: paths,
        fallback: false
    }
}
