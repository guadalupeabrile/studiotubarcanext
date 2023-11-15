import ReactPlayer from "react-player";

const ProjectVideo = () => {
    return (
        <section className='min-h-screen w-full'>
            <div className="">
                <div className="">
                    <video autoPlay loop muted className="object-cover h-screen">
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
