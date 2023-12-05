import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Image from 'next/image'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {

  return (
    <>
      <Layout>
        <Head>
          <title>studiotubarca</title>
        </Head>
        <div className='min-h-screen md:hidden' >
          <Image
            src="/assets/blog/videos/photo-video-studiotubarca-mobile.webp"
            alt={`Video studiotubarca`}
            fill
            style={{ objectFit: "cover" }}>

          </Image>
        </div>
        <MoreStories posts={allPosts} />
        <div className='hidden md:block'>
          <HeroPost></HeroPost>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'nameImage',
    'nameVideo',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
