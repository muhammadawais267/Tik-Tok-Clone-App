import React,{useRef, useState} from 'react'
import myVideo from './myvideo.mp4'

import './Video.css'

function Video() {

  const [playing , setPlaying ] = useState(false)
  
const videoRef = useRef(null);

const onVideoPress = () =>{
  if(playing){

    videoRef.current.pause();
    setPlaying(false);
  }
  else{
    videoRef.current.play();
    setPlaying(true);
  }
}

  
      
  return (
    <div className = "video">

     
      
      <video
      className = "video-play"
      ref = {videoRef}
      onClick = {onVideoPress}
       src= {myVideo}
       type="video/mp4"
       >

       </video>
      

      {/* <VideoFooter> */}
        {/* <VideoSlider> */}
      
    </div>
  )
}

export default Video
