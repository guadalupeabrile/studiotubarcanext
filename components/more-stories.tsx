import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import Image from 'next/image'
import Link from 'next/link'

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
          fill
          style={{ objectFit: "cover" }}
          priority
        />

      </div>
      <div
        className="grid grid-cols-1 overflow-y-scroll flex h-screen items-center justify-content md:gap-y-10 p-10 md:p-10 md:grid-cols-4 md:gap-x-10 lg:gap-x-10 lg:gap-y-10 md:gap-y-10"

      >
        {
          posts.map((post) => (
            <>
              <div className='h-screen flex flex-col items-center justify-content place-content-evenly md:h-auto'>
                <div className=''>
                  <PostPreview
                    key={post.slug}
                    title={post.title}
                    coverImage={post.coverImage}
                    nameImage={post.nameImage}
                    nameVideo={post.nameVideo}
                    date={post.date}
                    author={post.author}
                    slug={post.slug}
                    excerpt={post.excerpt} />
                </div>

                <div className='md:hidden'>
                  <Link as={`/projects/${post.slug}`} href={`/projects/${post.slug}`} aria-label={post.title}>
                    <Image
                      src={post.nameImage}
                      alt='nombre de proyecto'

                      objectFit='cover'
                      className="shadow w-full object-cover h-auto group-hover:shadow-lg group-hover:opacity-0  transition-shadow duration-200"
                      width={1300}
                      height={630} />
                  </Link>
                </div>
              </div>
            </>
          ))
        }
      </div >
    </section >
  )
}

export default MoreStories
