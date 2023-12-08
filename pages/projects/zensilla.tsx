import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motionTransitions'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import ProjectVideo from '../../components/project-video'
import Footer from '../../components/footer'
import bg1 from '../../public/assets/blog/zensilla-img/zensilla-bg-1.jpg'
import bg2 from '../../public/assets/blog/zensilla-img/zensilla-bg-2.jpg'
import bg3 from '../../public/assets/blog/zensilla-img/zensilla-bg-3.jpg'
import logo from '../../public/assets/blog/zensilla-img/zensilla-name.png'
import silla from '../../public/assets/blog/zensilla-img/zensilla-silla.png'


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
                        <div className='relative z-10'>
                            <div className=''>
                                <div className='absolute z-20'>
                                    <motion.div className='flex items-center md:gap-x-10 p-10'
                                        variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden'>
                                        <div>
                                            <Image
                                                src={logo}
                                                alt='zensilla logo'
                                                objectFit="cover"
                                                quality={100}
                                                placeholder="blur"
                                                priority>

                                            </Image>
                                        </div>
                                        <div>
                                            <Image
                                                src={silla}
                                                alt='zensilla logo'
                                                objectFit="cover"
                                                quality={100}
                                                placeholder="blur"
                                                priority>

                                            </Image>
                                        </div>
                                    </motion.div>
                                    <motion.div className='p-10 pt-0 text-xs text-left md:text-base text-gray-800 md:leading-relaxed'>
                                        <p>Buscábamos un mobiliario adaptable,</p>
                                        <p>versátil y de gran utilidad</p>
                                        <p>Que sea lo que tenga que ser,</p>
                                        <p>listo para diversas situaciones.</p>
                                        <p>A veces una mesa,</p>
                                        <p>a veces un sillón,</p>
                                        <p>y otras veces,</p>
                                        <p>lo que quieras que sea.</p>
                                        <p>Transportable, mutable, confortable.</p>
                                        <p className='pt-5'>ZENSILLA</p>
                                    </motion.div>
                                </div>

                                <div className=''>
                                    <Image
                                        src={bg1}
                                        alt='fondo'
                                        style={{ objectFit: "contain" }}
                                        quality={100}
                                        placeholder="blur"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className='relative overflow-scroll '>
                                <Image
                                    src={bg2}
                                    alt='fondo'
                                    objectFit="cover"
                                    quality={100}
                                    placeholder="blur"
                                    priority
                                />

                            </div>
                            <div className='relative overflow-scroll '>
                                <Image
                                    src={bg3}
                                    alt='fondo'
                                    objectFit="cover"
                                    quality={100}
                                    placeholder="blur"
                                    priority
                                />

                            </div>

                        </div>
                        <Footer nextProject={post.nextProject} nextProjectImg={post.nextProjectImg} manifiesto=''></Footer>
                        <div className='footer-screen'></div>
                    </article>
                </>
            )}

        </section>


    )
}

export async function getStaticProps() {

    const post = getPostBySlug('zensilla', [
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



