import React, { useEffect, useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import { useInView } from "react-intersection-observer";

const VidPlayer = React.memo(({ nameVideo }) => {
    return (
        <CloudinaryContext cloud_name="dyu1mlrnv">
            <Video
                publicId='igiardini-logo'
                width="100%"
                controls

            />
        </CloudinaryContext>
    );
});

const VideoPlayer = (nameVideo) => {

    return (
        <div >
            <VidPlayer nameVideo={nameVideo} />
        </div>
    );
};
export default VideoPlayer;