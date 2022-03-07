import { GetStaticProps } from 'next'
import React from 'react'
import {sanityClient, urlFor} from "../../../sanity-nextmedium/sanity"
import { Post } from '../../../sanity-nextmedium/typings'
import Header from '../../components/Header'


interface Props { 
  post:Post
}


function Post ({post}:Props) {
  console.log(post)
  return (
    <main><Header />
    
    <img className="w-full h-48 object-cover" src={urlFor(post.mainImage).url()!} alt="" />

    <article>
      <h1>{post.title}</h1>
    </article>
    </main>


  )
}
export default Post



//This is basically the function where it will tells nextjs to figure out whcih paths to pre-render. or find all the pages that exist for posts.
export const getStaticPaths = async ()=>{

  //lets pre-fetch all the posts
  const query = `*[_type == "post"]{
    _id,
    slug{
      current
    }
  }    
  `
  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current
    }
  }))

  return {
    paths,
    fallback:"blocking" //block the page from showing or it will show 404 if it doesn't exist'
  }
}



// StaticPaths doesn't help alone, we need to get the page with the specif props. which basically populates the information for the page.
export const getStaticProps: GetStaticProps = async ({params}) =>{
  const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      author-> {
        name, 
        image
      },
      'comments': *[_type == "comment" && post._ref == ^._id && approved == true],
      description,
      mainImage,
      slug,
      body
    }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })


  if(!post){
    return { notFound:true}
  }

  return { 
    props: {post},
    revalidate:60 //after 60 seconds it will update the catch in case someone brought changes to the page, then the cache will also be updated with new updated page.
  }
}