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
import bg1Mobile from '../../public/assets/blog/zensilla-img/zensilla-perro.png'
import bg2 from '../../public/assets/blog/zensilla-img/zensilla-bg-2.jpg'
import bg3 from '../../public/assets/blog/zensilla-img/zensilla-bg-3.jpg'
import logo from '../../public/assets/blog/zensilla-img/zensilla-name.png'
import silla from '../../public/assets/blog/zensilla-img/zensilla-silla.png'
import sillas from '../../public/assets/blog/zensilla-img/sillas-zensilla.png'
import grid1 from '../../public/assets/blog/zensilla-img/zensilla-grid-1.jpg'
import grid2 from '../../public/assets/blog/zensilla-img/zensilla-grid-2.jpg'
import grid3 from '../../public/assets/blog/zensilla-img/zensilla-grid-3.jpg'
import grid4 from '../../public/assets/blog/zensilla-img/zensilla-grid-4.png'
import florManifiesto from '../../public/assets/blog/footer/flor-manifiesto.png'


type Props = {
    post: PostType
    preview?: boolean
}

export default function Zensilla({ post, preview }: Props) {
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

                            <div className='absolute z-20'>
                                <motion.div className='flex items-center md:gap-x-10 px-10 pt-10'
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
                                <motion.div className='py-10 md:py-0 px-10 text-xs text-left md:text-xl text-gray-800 md:leading-relaxed'
                                    variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden'>
                                    <p>Buscábamos un mobiliario adaptable,</p>
                                    <p>versátil y de gran utilidad</p>
                                    <p className='hidden md:block'>Que sea lo que tenga que ser,</p>
                                    <p className='hidden md:block'>listo para diversas situaciones.</p>
                                    <p className='hidden md:block'>A veces una mesa,</p>
                                    <p className='hidden md:block'>a veces un sillón,</p>
                                    <p className='hidden md:block'>y otras veces,</p>
                                    <p className='hidden md:block'>lo que quieras que sea.</p>
                                    <p>Transportable, mutable, confortable.</p>
                                    <p className='pt-5'>ZENSILLA</p>
                                </motion.div>
                            </div>

                            <div className='hidden md:block'>
                                <Image
                                    src={bg1}
                                    className=''
                                    alt='fondo'
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                    placeholder="blur"
                                    priority
                                />
                            </div>
                            <div className='md:hidden'>
                                <Image
                                    src={bg1Mobile}
                                    className='h-screen w-full'
                                    alt='fondo'
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                    placeholder="blur"
                                    priority
                                />
                            </div>

                            <div className='absolute z-20 p-10 flex flex-col w-screen'>
                                <motion.div className='flex items-center md:gap-x-10'
                                    variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden'>
                                    <div>
                                        <Image
                                            src={sillas}
                                            alt='zensilla logo'
                                            objectFit="cover"
                                            quality={100}
                                            placeholder="blur"
                                            priority>

                                        </Image>
                                    </div>
                                </motion.div>
                                <motion.div className='mt-56 mr-24 md:mr-0 md:ml-20 md:mt-5 text-xs text-left md:text-xl text-gray-800 md:leading-relaxed'
                                    variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden'>
                                    <p className='hidden md:block'>Fabricada en madera fenólica de la mejor calidad con</p>
                                    <p className='hidden md:block'>terminación laqueada. La Zensilla es un mueble encastrable.</p>
                                    <p className='md:hidden'>La Zensilla es un mueble encastrable.</p>
                                    <p>Hay muchas formas de armarla. Vienen con un manual de <span className='md:hidden'>uso y las indicaciones para ponerse a jugar.</span></p>
                                    <p className='hidden md:block'>uso y las indicaciones para ponerse a jugar. Hicimos un</p>
                                    <p className='hidden md:block'>packaging no desechable, con una cuerda de yute, para</p>
                                    <p className='hidden md:block'>transportarla. Pesa 8 kg. Se puede limpiar con un trapo</p>
                                    <p className='hidden md:block'>húmedo y stockear desarmada en un espacio pequeño,</p>
                                    <p className='hidden md:block'>acostada o parada.</p>
                                </motion.div>
                            </div>

                            <div className='hidden md:block md:relative'>
                                <Image
                                    src={bg2}
                                    alt='fondo'
                                    objectFit="contain"
                                    quality={100}
                                    placeholder="blur"
                                    priority
                                />
                            </div>
                            <div className='md:hidden'>
                                <Image
                                    src={bg2}
                                    className='h-screen w-full'
                                    alt='fondo'
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                    placeholder="blur"
                                    priority
                                />
                            </div>

                            <div className='absolute z-20 p-10 flex flex-col w-screen'>
                                <div className='flex items-center grid gap-x-10 md:grid-cols-3'>
                                    <motion.div
                                        variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden'>
                                        <Image
                                            src={grid1}
                                            alt='zensilla logo'
                                            className='h-max-screen'
                                            objectFit="cover"
                                            quality={100}
                                            placeholder="blur">

                                        </Image>
                                    </motion.div>
                                    <motion.div className='hidden md:block'
                                        variants={fadeIn('up', 0.7)} initial="hidden" animate="show" exit='hidden'>
                                        <Image
                                            src={grid2}
                                            alt='zensilla logo'
                                            objectFit="cover"
                                            quality={100}
                                            placeholder="blur">

                                        </Image>
                                    </motion.div>
                                    <motion.div
                                        className='hidden md:block '
                                        variants={fadeIn('up', 0.9)} initial="hidden" animate="show" exit='hidden'>
                                        <Image
                                            src={grid3}
                                            alt='zensilla logo'
                                            objectFit="cover"
                                            quality={100}
                                            placeholder="blur">
                                        </Image>
                                    </motion.div>
                                </div>
                                <div>
                                    <motion.div className='hidden md:block pt-64'
                                        variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden'>
                                        <Image
                                            src={grid4}
                                            alt='zensilla logo'
                                            objectFit="cover"
                                            quality={100}
                                            placeholder="blur">

                                        </Image>
                                    </motion.div>
                                </div>
                                <a href='/assets/blog/pdf/ficha-tecnica-zensilla.pdf' download>
                                    <motion.div className='hidden md:block pt-5 '
                                        variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden'>
                                        <Image
                                            src={florManifiesto}
                                            alt='Flor Manifiesto'
                                            className='hover:shadow cursor-pointer'
                                            objectFit="cover"
                                            width={200}
                                            height={200}
                                            quality={100}
                                            placeholder="blur">

                                        </Image>
                                    </motion.div>
                                </a>
                            </div>

                            <div className='hidden md:relative md:block'>
                                <Image
                                    src={bg3}
                                    alt='fondo'
                                    objectFit="cover"
                                    quality={100}
                                    placeholder="blur"
                                />
                            </div>
                            <div className='md:hidden'>
                                <Image
                                    src={bg3}
                                    className='h-screen w-full'
                                    alt='fondo'
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                    placeholder="blur"
                                    priority
                                />
                            </div>

                            <div className='relative'>
                                <ProjectVideo video={post.video} videoMobile={post.videoMobile} ></ProjectVideo>
                            </div>

                        </div>
                        <Footer nextProject={post.nextProject} nextProjectImg={post.nextProjectImg} manifiesto=''></Footer>
                        <div className='bg-amber-400 footer-screen'></div>
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



