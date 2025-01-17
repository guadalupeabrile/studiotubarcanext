import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import Image from 'next/image'
import { getPostBySlug } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import CasabarbolContent from '../../components/casabarbol'
import ProjectVideo from '../../components/project-video'
import Footer from '../../components/footer'

import HeroImg from '../../public/assets/blog/casabarbol-img/casabarbol-hero.png'
import NameLogo from '../../public/assets/blog/casabarbol-img/casabarbol-name.png'

type Props = {
    post: PostType
    preview?: boolean
}

export default function Casabarbol({ post, preview }: Props) {
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
                        <article>
                            <Head>
                                <title>{title}</title>
                                <meta property="og:image" content={post.ogImage.url} />
                            </Head>
                            <div>
                                <div className='hidden md:block md:relative md:flex md:sticky top-0 bg-custom-background h-screen z-20 w-screen items-center justify-center'>
                                    <Image
                                        src={NameLogo}
                                        alt='Cava'
                                        style={{ objectFit: "cover" }}
                                        className='absolute top-0 right-0 z-15'
                                        width={550}
                                        quality={100}
                                        placeholder="blur"
                                        priority />
                                    <Image
                                        src={HeroImg}
                                        alt='Casabarbol'
                                        className=''
                                        quality={100}
                                        placeholder="blur"
                                        width={800}
                                        priority />


                                </div>
                                <div className='md:hidden relative block sticky top-0 bg-custom-background z-10 w-screen h-auto flex items-center  justify-center pt-24 md:pb-32 pb-16'>
                                    <Image
                                        src={NameLogo}
                                        alt='Cava'
                                        style={{ objectFit: "cover" }}
                                        className='absolute top-0 right-0 z-15'
                                        width={200}
                                        quality={100}
                                        placeholder="blur"
                                        priority />
                                    <Image
                                        src={HeroImg}
                                        alt='Casabarbol'
                                        className=''
                                        quality={100}
                                        placeholder="blur"
                                        width={250}

                                        priority />


                                </div>
                                <div className='z-20 relative' >
                                    <CasabarbolContent />
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

    const post = getPostBySlug('casabarbol', [
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


