import React, { useState } from "react";
import './VideoSidebar.css';
import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";

const VideoSidebar = ({ likes, messages, shares }) => {
    const [liked, setLiked] = useState(false)

    return (<div className="VideoSidebar">
        <div className="VideoSidebar__button">
            {liked ? <Favorite fontSize="large" onClick={e => {
                setLiked(false)
            }} /> : <FavoriteBorder fontSize="large" onClick={e => {
                setLiked(true)
            }} />}
            <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className="VideoSidebar__button">
            <Message fontSize="large" />
            <p>{messages ? messages : "Error"}</p>
        </div>
        <div className="VideoSidebar__button">
            <Share fontSize="large" />
            <p>{shares}</p>
        </div>
    </div>)
}

export default VideoSidebar