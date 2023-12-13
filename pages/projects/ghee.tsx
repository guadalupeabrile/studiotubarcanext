import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import Image from 'next/image'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import ProjectVideo from '../../components/project-video'
import Footer from '../../components/footer'

import HeroImg from '../../public/assets/blog/ghee-img/ghee-hero.png'
import GheeBg from '../../public/assets/blog/ghee-img/ghee-bg.png'
import Flor from '../../public/assets/blog/footer/flor-manifiesto.png'
import GheeSpoon from '../../public/assets/blog/ghee-img/gheeSpoon.png'
import GheePot from '../../public/assets/blog/ghee-img/gheePot.png'
import GheeSunset from '../../public/assets/blog/ghee-img/gheeSunset.png'


type Props = {
    post: PostType
    preview?: boolean
}

export default function Ghee({ post, preview }: Props) {
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
                            <div className=''>
                                <div className='relative grid justify-items-center w-screen  z-10 p-20 bg-custom-background'>
                                    <Image
                                        src={HeroImg}
                                        alt='Ghee Logo'
                                        quality={100}
                                        placeholder="blur"
                                        priority />

                                </div>
                                <div className='relative bg-custom-background z-10 grid justify-items-center'>
                                    <div className='absolute z-20 grid grid-cols-2'>
                                        <div className='grid grid-cols-2 items-center justify-items-center pt-96 mt-40'>
                                            <Image
                                                src={Flor}
                                                alt='Flor Manifiesto'
                                                quality={100}
                                                placeholder="blur"
                                                style={{ objectFit: "contain" }}
                                                priority
                                            />
                                            <p>Qué es Gheemegold?</p>
                                            <Image
                                                src={Flor}
                                                alt='Flor Manifiesto'
                                                quality={100}
                                                placeholder="blur"
                                                style={{ objectFit: "contain" }}
                                                priority
                                            />
                                            <p>Beneficios</p>
                                        </div>
                                        <div className='pt-96'>
                                            <Image
                                                src={GheeSpoon}
                                                alt='Ghee Spoon'
                                                quality={100}
                                                placeholder="blur"
                                                style={{ objectFit: "contain" }}
                                                priority
                                            />
                                        </div>
                                        <div className=''>
                                            <Image
                                                src={GheePot}
                                                alt='Ghee Pot'
                                                quality={100}
                                                placeholder="blur"
                                                style={{ objectFit: "contain" }}
                                                priority
                                            />
                                        </div>
                                        <div className='text-left flex items-center pl-20'>
                                            <div>
                                                <p className='leading-loose'>Es la cocina el corazón de cada hogar.</p>
                                                <p className='leading-loose'>En dónde se reúnen generaciones,</p>
                                                <p className='leading-loose'>se comparten historias,</p>
                                                <p className='leading-loose'>y se vierte amor en cada plato.</p>

                                                <p className='mt-10 leading-loose'>En una búsqueda por conectar tradiciones,</p>
                                                <p className='leading-loose'>encontrar la pureza</p>
                                                <p className='leading-loose'>y resaltar la esencia de cada hogar.</p>

                                                <p className='mt-10 leading-loose'>Abrimos las puertas de GHEE ME GOLD,</p>
                                                <p className='leading-loose'>dónde cocinamos el mejor GHEE casero,</p>
                                                <p className='leading-loose'>con amor y pura autenticidad.</p>
                                            </div>
                                        </div>
                                        <div className='w-screen h-screen col-span-2 '>
                                            <Image
                                                src={GheeSunset}
                                                alt='Ghee Pot'
                                                placeholder="blur"
                                                style={{ objectFit: "contain" }}

                                            />
                                        </div>
                                        <div className='col-span-2 pt-36'>
                                            <div>

                                                <video autoPlay muted controls loop playsInline className='h-full w-full '
                                                    src="/assets/blog/projects-videos/zensilla-video.mp4"></video>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='bg-custom-background'>
                                        <Image
                                            src={GheeBg}
                                            alt='Ghee Bg'
                                            quality={100}
                                            placeholder="blur"
                                            style={{ objectFit: "contain" }}
                                            priority />
                                    </div>`

                                </div>

                            </div>
                            <Footer nextProject={post.nextProject} nextProjectImg={post.nextProjectImg} manifiesto=''></Footer>
                            <div className='footer-screen'></div>
                        </article>
                    </>
                )}

            </section>

        </Layout >
    )
}

export async function getStaticProps() {

    const post = getPostBySlug('ghee', [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'nameImage',
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

