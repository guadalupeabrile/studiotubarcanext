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
            <section className='min-h-screen py-20'>
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
                            {/* <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                            /> */}
                            <div>
                                <div className='sticky top-0'>
                                    <Carousel />
                                </div>
                                <div className='z-10 sticky'>
                                    <ProjectVideo></ProjectVideo>
                                </div>
                            </div>
                            <Footer></Footer>
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
        'video'
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



