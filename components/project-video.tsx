
type Props = {
    video: string
    videoMobile: string
}

const ProjectVideo = ({ video, videoMobile }: Props) => {
    return (
        <section className='min-h-screen w-full'>
            <div className="">
                <div className="">
                    <video autoPlay controls loop muted className="w-full h-screen object-cover">
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>

                </div>
                <div className='md:hidden'>
                    <video autoPlay muted controls loop playsInline className='absolute h-full w-full flex items-center justify-center -bottom-0 '>
                        <source src={videoMobile} type="video/mp4" />
                    </video>
                </div>

            </div>
        </section>
    )
}

export default ProjectVideo;
