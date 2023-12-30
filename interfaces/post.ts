import type Author from './author'

type PostType = {
  slug: string
  title: string
  urlName: string
  date: string
  coverImage: string
  nameImage: string
  nameVideo: string
  nameGif: string
  video: string
  videoMobile: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  nextProject: string
  nextProjectImg: string
}

export default PostType
