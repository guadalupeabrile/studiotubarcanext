import { useRouter } from 'next/router'
import Image from 'next/image'
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
                            <div className=' overflow-scroll m-0'>
                                <Image
                                    src={bg1}
                                    alt='fondo'
                                    objectFit="cover"
                                    quality={100}
                                    placeholder="blur"
                                    priority
                                />

                            </div>
                            <div className=' overflow-scroll m-0 '>
                                <Image
                                    src={bg2}
                                    alt='fondo'
                                    objectFit="cover"
                                    quality={100}
                                    placeholder="blur"
                                    priority
                                />

                            </div>
                            <div className=' overflow-scroll m-0'>
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



