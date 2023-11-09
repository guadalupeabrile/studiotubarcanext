import ReactPlayer from "react-player";

const ProjectVideo = () => {
    return (
        <section className='min-h-screen w-full z-10'>
            <div className="sticky">
                <div className="">
                    <video autoPlay loop muted className="absolute object-cover h-screen">
                        <source
                            src="/zensilla-video.mp4"
                            type="video/mp4"
                        />
                    </video>

                </div>
            </div>
        </section>
    )
}

export default ProjectVideo;
