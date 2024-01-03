"use client"

import PostPreview from './post-preview'
import type Post from '../interfaces/post'

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
      </div >
    </section >
  )
}

export default MoreStories
