import { useRouter } from 'next/router'
import Image from 'next/image'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import Carousel from '../../components/Carousel'
import ProjectVideo from '../../components/project-video'

import Footer from '../../components/footer'

import igiardiniGif from "../../public/assets/blog/igiardini-img/igiardini-gif.gif"
import florManifiesto from "../../public/assets/blog/footer/flor-manifiesto.png"

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
                                        <div className='w-full bg-custom-background'>
                                            <Image
                                                src={igiardiniGif}
                                                alt={'Igiardini gif'}
                                                width={1920} />
                                        </div>
                                        <div className='w-full bg-custom-background flex justify-center'>
                                            <a href='/assets/blog/pdf/ficha-tecnica-igiardini.pdf' download>
                                                <Image
                                                    src={florManifiesto}
                                                    alt={"Flor descarga ficha tecnica"}
                                                    width={100}
                                                    className='hover:shadow-lg transition-shadow duration-200' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden md:block md:sticky md:z-20 md:p-0 md:w-full'>
                                    <ProjectVideo video={post.video} videoMobile={post.videoMobile}></ProjectVideo>
                                    <div className='h-screen w-full bg-custom-background'>
                                        <Image
                                            src={igiardiniGif}
                                            alt={'Igiardini gif'}
                                            width={1920} />
                                    </div>
                                    <div className='w-full bg-custom-background'>
                                        <a href='/assets/blog/pdf/ficha-tecnica-igiardini.pdf' download>
                                            <Image
                                                src={florManifiesto}
                                                alt={"Flor descarga ficha tecnica"}
                                                className='hover:shadow-lg transition-shadow duration-200' />
                                        </a>
                                    </div>

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
        'urlName',
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



