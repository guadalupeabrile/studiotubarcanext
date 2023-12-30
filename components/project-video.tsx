
type Props = {
    video: string
    videoMobile: string
}

const ProjectVideo = ({ video, videoMobile }: Props) => {
    return (
        <section className='min-h-screen w-screen bg-custom-background'>
            <div className="w-screen ">
                <div className="hidden md:block">
                    <video autoPlay controls loop muted className="w-screen h-screen object-cover">
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>

                </div>
                <div className='md:hidden w-screen h-screen'>
                    <video autoPlay muted controls loop playsInline className='h-screen w-screen '>
                        <source src={videoMobile} type="video/mp4" />
                    </video>
                </div>

            </div>
        </section>
    )
}

export default ProjectVideo;
