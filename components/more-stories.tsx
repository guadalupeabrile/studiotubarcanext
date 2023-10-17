import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="fixed top-0 left-0 w-screen mx-auto p-20 bg-custom-background h-full">
      < div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-10 lg:gap-x-10 lg:gap-y-10 md:gap-y-10" >
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
