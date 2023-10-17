import Avatar from './avatar'
import DateFormatter from './date-formatter'
import Image from 'next/image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  )
}

export default PostHeader
