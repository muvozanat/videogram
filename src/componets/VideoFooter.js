import React from "react"
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from "react-ticker"

const VideoFooter = ({ channel, description, song }) => {
    return (<div className="VideoFooter">
        <div className="VideoFooter__text">
            <h3>{channel ? channel : "Xatolik"}</h3>
            <p>{description ? description : "Xatolik"}</p>
            <div className="VideoFooter__ticker">
                <MusicNoteIcon className="VideoFooter__icon" />
                <Ticker mode="smooth">
                    {({ index }) => (
                        <>
                            <p>{song ? song : "Xatolik"}</p>
                        </>
                    )}
                </Ticker>
            </div>
        </div>
        <img
            className="VideoFooter__record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt="video footer" />
    </div>)
}

export default VideoFooter