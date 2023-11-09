import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  nameImage: string
  nameVideo: string
  video: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
