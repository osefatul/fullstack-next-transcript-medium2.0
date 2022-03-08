import { GetStaticProps } from 'next'
import React from 'react'
import {sanityClient, urlFor} from "../../../sanity-nextmedium/sanity"
import { Post } from '../../../sanity-nextmedium/typings'
import Header from '../../components/Header'
import PortableText from "react-portable-text"
import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
interface Props { 
  post:Post
}


function Post ({post}:Props) {
  console.log(post)
  return (
    <main><Header />
    
    <img className="w-full h-40 object-cover" src={urlFor(post.mainImage).url()!} alt="" />

    <article className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
      <h2 className="text-xl font-light text-gray-500 mb-2">{post.description}</h2>

      <div className="flex items-center space-x-2">
        <img className="rounded-full h-10" src={urlFor(post.author.image).url()!} alt="" />
        <p className="font-extralight text-sm">
          Blog post by  
          <span className="text-green-600"> 
            {" "} {post.author.name} {" "}
          </span> 
          - Published at {new Date(post._createdAt).toLocaleString()}
        </p>
      </div>

      <div>
        <PortableText 
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} 
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} 
        content={post.body}
        serializers={{
          h1:(props: any) =>(
            <h1 className="text-2xl font-bold my-5" {...props} />
          ),
          h2:(props: any) =>(
            <h2 className="text-xl font-bold my-5" {...props} />
          ),
          li:({children}: any) =>(
            <li className="ml-4 list-disc" > {children}</li>  
          ),

          link: ({href, children}: any) =>(
            <a href={href} className="text-blue-500 hover:underline"> {children}</a> 
          )
    
          

        }}
        />
      </div>
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
      body[]{
        ...,
        asset->{
          ...,
          "key": _id,
        }
      }
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