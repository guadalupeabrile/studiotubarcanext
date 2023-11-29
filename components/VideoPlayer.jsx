import React, { useState, useEffect, memo } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import { useInView } from "react-intersection-observer";

const MemoVidPlayer = memo(({ publicId }) => {
    return (
        <CloudinaryContext cloudName='dyu1mlrnv'>
            <Video publicId={publicId} width="311px" autoPlay loop />
        </CloudinaryContext>
    );
});

const VideoPlayer = ({ vidPublicId = "igiardini-logo" }) => {
    const [publicId, setPublicId] = useState("");
    const { ref, inView } = useInView({ threshold: 1 });

    useEffect(() => {
        if (inView === true) {
            setPublicId(vidPublicId);
        }
    }, [inView, vidPublicId]);

    return (
        <div ref={ref}>
            <MemoVidPlayer publicId={publicId} />
        </div>
    )
};

export default VideoPlayer;