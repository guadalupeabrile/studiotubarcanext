
type Props = {
    video: string
    videoMobile: string
}

const ProjectVideo = ({ video, videoMobile }: Props) => {
    return (
        <section className='min-h-screen w-full'>
            <div className="w-full ">
                <div className="hidden md:block">
                    <video autoPlay controls loop muted className="w-full h-screen object-cover">
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>

                </div>
                <div className='md:hidden w-full'>
                    <video autoPlay muted controls loop playsInline className='h-full w-full flex items-center justify-center -bottom-0 '>
                        <source src={videoMobile} type="video/mp4" />
                    </video>
                </div>

            </div>
        </section>
    )
}

export default ProjectVideo;
