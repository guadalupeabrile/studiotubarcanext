import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import VideoPlayer from '../utils/VideoPlayer'

type Props = {
  title: string
  coverImage: string
  nameImage: string
  nameVideo: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  nameImage,
  nameVideo,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="sm:mx-0">

      <div className='group'>
        <div className='relative'>
          <Link as={`/projects/${slug}`} href={`/projects/${slug}`} aria-label={title}>

            <VideoPlayer
              nameVideo={nameVideo}></VideoPlayer>


          </Link>
        </div>
      </div>

    </div>
  )
}

export default PostPreview
