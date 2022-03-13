import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import {sanityClient, urlFor} from "../../../sanity-nextmedium/sanity"
import { Post } from '../../../sanity-nextmedium/typings'
import Header from '../../components/Header'
import PortableText from "react-portable-text"
import { useForm, SubmitHandler } from "react-hook-form";

// Fetch Post from typings.
interface Props { 
  post:Post
}

// Introduce a type for submithandle
interface IFormInput {
  _id:string;
  name:string;
  email:string;
  comment:string

}

function Post ({post}:Props) {

  const {register, handleSubmit, formState: {errors}} = useForm<IFormInput> ()

  //after we submit the form this is from comment to show us it is submitted
  const [submitted, setSubmitted] = useState(false)

  //by using SubmitHandler<IFormInput> It knows what to expect
  const onSubmit: SubmitHandler<IFormInput> = async (data)=>{
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data)
    }).then(() =>{
      console.log(data);
      setSubmitted(true)//comment submit is true
    }).catch((err) => {
      console.log(err);
      setSubmitted(false)//comment submit is false 
    })
  }

  return (
    <main>
      
      <Header />
    
      {/* BANNER PICTURE */}
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

        <div className="mt-10">
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
              <a href={href} className="text-blue-500 hover:underline"> {children}</a>)
          }}
          />
        </div>
      </article>


      <hr className="max-w-lg my-5 mx-auto border border-yellow-500 " />


      {submitted ? (
        <div className="grid p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto ">
          <h3 className="text-3xl">Thank you for submitting your comment!</h3>
          <p>
            Once it has been approved, it will apear below
          </p>
        </div>

                ):(

      //FORM RENDERING  
      <form className="grid p-5 max-w-2xl mb-10 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-sm text-yellow-500 ">Enoyed this article?</h3>
          <h4 className="text-3xl font-bold ">Leave a comment below!</h4>
          <hr className="py-3 mt-2" />

        {/* JUST TO STORE POST ID AND REGISTERED WITH THE FORM  */}
        <input type="hidden"
          {...register("_id")}
          name="_id"
          value={post._id}
        />
      
        <label className="block mb-5" htmlFor="">
          <span className="text-gray-700">Name</span>
          <input className="shadow border rounded py-2 px-3 form-input block mt-1 w-full ring-yellow-500 outline-none focus:ring " 
          placeholder="Ex - Mike" type="text" 
          {...register("name", { required:true})}
          />  
        </label>  

        <label className="block mb-5" htmlFor="">
          <span className="text-gray-700">Email</span>
          <input className="shadow border rounded py-2 px-3 form-input block mt-1 w-full ring-yellow-500 outline-none   focus:ring " 
          placeholder="Ex - Mike@gmial.com" type="email" 
          {...register("email", { required:true})}
          />  
        </label>  

        <label className="block mb-5" htmlFor="">
          <span className="text-gray-700">Comment</span>
          <textarea  className=" shadow block border w-full rounded mt-1 py-2 px-3 form-textarea outline-none ring-yellow-500 focus:ring" 
          placeholder="Write your comments or feedbacks" rows={8} 
          {...register("comment", { required:true})}
          />  
        </label>

        {/*Errors will return when field validation fails */}
        
        <div className="grid p-5">
          {errors.name && (
            <span className="text-red-500">The Name Field is required</span>
          )}

          {errors.email && (
            <span className="text-red-500">The Email Field is required</span>
          )}

          {errors.comment && (
            <span className="text-red-500">The comment Field is required</span>
          )}
        </div>
      

        <input type="submit" 
        className="shadow bg-yellow-500 
        hover:bg-yellow-400 
        focus:shadow-outline 
        focus:outline-none 
        text-white font-bold py-2 px-4 rounded cursor-pointer"/>
    </form>
    )}

    {/* COMMMENTS SHOWN ONCE THEY ARE APPROVED */}
    <div className="grid p-10 my-10 max-w-2xl mx-auto shadow shadow-yellow-500 space-y-2  ">
      <h3 className="text-4xl">Comments</h3>
      <hr className="pb-2" />
      {post.comments.map(comment=>(
        <div>
          <p>
            <span className="text-yellow-500 capitalize">
            {comment.name}:  </span>
            {comment.comment}
          </p>
        </div>
      ))}
    </div>


    
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