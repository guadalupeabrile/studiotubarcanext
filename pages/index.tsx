import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

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
          <video autoPlay loop muted playsInline className="absolute w-full h-screen object-cover">
            <source
              src="assets/blog/videos/hero-video-studiotubarca-mobile.mp4"
              type="video/mp4"
            />
          </video>
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
