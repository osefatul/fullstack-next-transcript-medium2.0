import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {sanityClient, urlFor} from "../../sanity-nextmedium/sanity"
import {Post} from "../../sanity-nextmedium/typings"


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
        <div></div>
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