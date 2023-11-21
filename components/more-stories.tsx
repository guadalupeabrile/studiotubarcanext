import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import Image from 'next/image'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="fixed top-0 left-0 w-screen flex items-center justify-content h-screen">
      <div className='bg'>
        <Image
          src='/assets/blog/texture/bg-texture.png'
          alt='fondo'
          layout='fill'
          objectFit="cover"
        />

      </div>
      <div
        className="grid grid-cols-1 overflow-y-scroll flex h-screen items-center justify-content gap-y-10 p-10 md:p-10 md:grid-cols-4 md:gap-x-10 lg:gap-x-10 lg:gap-y-10 md:gap-y-10"

      >
        {
          posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              nameImage={post.nameImage}
              nameVideo={post.nameVideo}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))
        }
      </div >
    </section >
  )
}

export default MoreStories
