import React, { useRef, useState, useEffect } from "react";
import randomVido from "../source/video.mp4"
import './Video.css'
import VideoFooter from "./VideoFooter";
import VideoPause from "./VideoPause";

import VideoSidebar from "./VideoSidebar";
const Video = ({ url, channel, description, song, likes, messages, shares }) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    useEffect(()=>{
        document.addEventListener('click', ()=>{
            // if(document.querySelector('.VideoPause').className='VideoPause yopish'){
                handleVideoPress()
                document.querySelector('.VideoPause').classList.toggle('yopish')
            // }

            
        }) 

            // setPlaying(true)
            // console.log(1)
            // document.querySelector('.VideoPause').classList.remove("yopish")

    })
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
            
            // document.querySelector('.VideoPause').classList.toggle('yopish')

        } else {
            document.querySelector('.VideoPause').classList.toggle('yopish')
            videoRef.current.play()
            setPlaying(true)
            // document.querySelector('.VideoPause').classList.add('yopish')
            // document.querySelector('.VideoPause').classList.remove("yopish")

        }
    }


    return (<div className="Video">

        <video
            src={url ? url : randomVido}
            className="video_player"
            loop
            ref={videoRef}
            >
        </video>
        <VideoPause/>
        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>)
}

export default Video