import React, { useRef, useState} from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Videos({url, name, songname, description, likes, shares, messages}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        }else {
            videoRef.current.play()
            setPlaying(true)
        }
        //If video is playing 
        //Stop it... 

        //Otherwise if not playing
        //play it... 
    }

    return (
        <div className="video">
            <video
            onClick={handleVideoPress}
            className="video__player"
            loop
            ref= {videoRef}
            src= {url} >
            </video>
            
            <VideoFooter name={name} songname={songname} description= {description}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Videos
