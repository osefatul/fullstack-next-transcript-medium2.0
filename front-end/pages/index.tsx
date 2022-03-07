import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {sanityClient, urlFor} from "../../sanity-nextmedium/sanity"
import {Post} from "../../sanity-nextmedium/typings"
import Link from 'next/link'


// typescripts interface
interface Props {
  posts:[Post]}


const Home = ({posts}: Props) => {
  console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">Medium</span> is a place to write, read, and connect
            </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect with millions of readers
          </h2>
        </div>

        <img className="hidden md:inline-flex h-32 lg:h-full" src="https://cdn-icons.flaticon.com/png/512/2582/premium/2582607.png?token=exp=1646551054~hmac=896ff53b6912d3609a965afc4acc4afb" alt="" />
      </div>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 ">

        {posts.map(post =>(
          <Link key={post._id} href={`/post/${post.slug.current}`}>
           
           <div className="group cursor-pointer border rounded-lg overflow-hidden">
             {/* ! means to ensure this is not null */}
             <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="" />
             <div className="flex justify-between p-5 bg-white">
               <div>
                 <p className="text-lg font-bold">{post.title}</p>
                 <p className="text-xs">{post.description} by {post.author.name}</p>
               </div>

               <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />

             </div>
             </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home


// this will change the index Home page root into server side rendered page.

export const getServerSideProps = async ()=>{
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{name, image},
    slug,
    description,
    mainImage
  }`;

  const posts = await sanityClient.fetch(query)

  return {
    props:{posts}
  }
}