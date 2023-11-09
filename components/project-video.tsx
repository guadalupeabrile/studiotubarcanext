import ReactPlayer from "react-player";

const ProjectVideo = () => {
    return (
        <section className='min-h-screen w-full'>
            <div className="">
                <div className="">
                    <ReactPlayer
                        url='assets/blog/videos/hero-video-studiotubarca.mp4'
                        controls={true}
                        playing={true}
                    />
                </div>

            </div>
        </section>
    )
}

export default ProjectVideo;
