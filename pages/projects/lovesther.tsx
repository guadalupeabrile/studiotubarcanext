import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import Image from 'next/image'
import { getPostBySlug } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import ProjectVideo from '../../components/project-video'
import Footer from '../../components/footer'

import HeroImg from '../../public/assets/blog/love-img/love-hero.png'
import LoveContent from '../../components/lovesther'

type Props = {
    post: PostType
}

export default function Lovesther({ post }: Props) {
    const router = useRouter()
    const title = `${post.title} by studiotubarca`
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    console.log(post.video)
    return (
        <Layout>
            <section className='min-h-screen'>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article >
                            <Head>
                                <title>{title}</title>
                                <meta property="og:image" content={post.ogImage.url} />
                            </Head>
                            <div>

                                <div className='bg-custom-background relative z-10 border-box  w-screen md:h-screen p-5 '>
                                    <Image
                                        src={HeroImg}
                                        alt='Lovesther Logo'
                                        style={{ objectFit: "contain" }}
                                        className='h-full'
                                        quality={100}
                                        placeholder="blur"
                                        priority />

                                </div>
                                <div className='relative z-10 bg-custom-background pb-52 md:pb-96'>

                                </div>
                                <div className='relative z-10'>
                                    <LoveContent />
                                    {/* <ProjectVideo video={post.video} videoMobile={post.videoMobile}></ProjectVideo> */}
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

    const post = getPostBySlug('lovesther', [
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



