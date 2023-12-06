import ReactPlayer from "react-player";


const ProjectVideo = () => {
    return (
        <section className='min-h-screen w-full'>
            <div className="">
                <div className="">
                    <video autoPlay loop muted className="w-full h-screen object-cover">
                        <source
                            src='/assets/blog/projects-videos/igiardini-video.mp4'
                            type="video/mp4"
                        />
                    </video>

                </div>
            </div>
        </section>
    )
}

export default ProjectVideo;
