import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Image from 'next/image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import VideoPlayer from '../components/VideoPlayer';

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

            {/* <Image
              src={coverImage}
              alt={`Cover Image for ${title}`}
              className="w-full object-cover h-auto group-hover:shadow-lg group-hover:opacity-0  transition-shadow duration-200"
              width={1300}
              height={630}
            /> */}

            <VideoPlayer vidPublicId="igiardini-logo" />

          </Link>
        </div>
      </div>

    </div>
  )
}

export default PostPreview
