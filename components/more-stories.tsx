"use client"

import PostPreview from './post-preview'
import CoverImage from './cover-image'
import type Post from '../interfaces/post'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {


  return (
    <section className="md:fixed md:top-0 md:left-0 w-screen flex items-center justify-center h-screen bg-custom-background">
      <div
        className="grid grid-cols-1 gap-y-5 md:overflow-y-scroll flex h-screen items-center justify-content md:gap-y-10 p-10 md:p-10 md:grid-cols-4 md:gap-x-10 lg:gap-x-10 lg:gap-y-10 md:gap-y-10"

      >
        {
          posts.map((post) => (
            <div key={post.title} className='flex flex-col items-center justify-center md:place-content-evenly'>
              <PostPreview
                title={post.title}
                coverImage={post.coverImage}
                nameImage={post.nameImage}
                nameVideo={post.nameVideo}
                date={post.date}
                author={post.author}
                slug={post.urlName}
                excerpt={post.excerpt} />
            </div>

          ))
        }
        <div key="manifiesto" className='md:hidden flex flex-col items-center justify-center md:place-content-evenly relative group'>
          <Link as={`/manifiesto`} href={`/manifiesto`} aria-label="manifiesto">
            <Image
              src='/assets/blog/manifiesto/firma-studiotubarca.png'
              alt={`Cover Image for Manifiesto`}
              className="p-5 w-full object-cover h-auto group-hover:shadow-lg group-hover:opacity-0  transition-shadow duration-200"
              width={350}
              height={350}
              priority
            />
            <Image
              src='/assets/blog/manifiesto/arte-di-costruire.png'
              alt={`Name Preview for Manifiesto`}
              className="p-5 shadow opacity-50 group-hover:opacity-90  absolute h-full w-full flex items-center justify-center -bottom-0  "
              width={350}
              height={350}
              priority
            />
          </Link>
        </div>
      </div >
    </section >
  )
}

export default MoreStories
