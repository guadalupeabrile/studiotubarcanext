import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import Post from '../../interfaces/post'
import Carousel from '../../components/Carousel'
import ProjectVideo from '../../components/project-video'
import HeroPost from '../../components/hero-post'
import Footer from '../../components/footer'

type Props = {
    post: PostType
    preview?: boolean
}

export default function Igiardini({ post, preview }: Props) {
    const router = useRouter()
    const title = `${post.title} by studiotubarca`
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout>
            <section className='min-h-screen'>
                {/* <Header /> */}
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>{title}</title>
                                <meta property="og:image" content={post.ogImage.url} />
                            </Head>
                            <div className='font-mono'>
                                <div className='z-10 sticky top-0'>
                                    <Carousel />
                                    <div className='md:hidden relative w-full'>
                                        <ProjectVideo video={post.video} videoMobile={post.videoMobile}></ProjectVideo>
                                    </div>
                                </div>
                                <div className='hidden md:block md:sticky md:z-20 md:p-0 md:w-full'>
                                    <ProjectVideo video={post.video} videoMobile={post.videoMobile}></ProjectVideo>
                                </div>


                            </div>
                            <Footer nextProject={post.nextProject} nextProjectImg={post.nextProjectImg} manifiesto=''></Footer>
                            <div className='footer-screen'></div>
                        </article>
                    </>
                )}

            </section>

        </Layout>
    )
}

export async function getStaticProps() {

    const post = getPostBySlug('igiardini', [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'nameImage',
        'nameGif',
        'nextProjectImg',
        'video',
        'videoMobile',
        'nextProject'
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}



