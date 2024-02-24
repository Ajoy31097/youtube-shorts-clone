import React, { useState, useEffect, useRef } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { CgComment } from "react-icons/cg";
import { PiShareFat } from "react-icons/pi";
import { IoMdSync } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import './Video.css';

const Video = ({ videos }) => {
  const [currentID, setCurrentID] = useState(0);
  const { url, channel, description, likes, dislikes, comments } = videos[currentID];
  const [playing, setPlaying] = useState(true);
  const [subscribe, setSubscribe] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowUp" && currentID > 0) {
        setCurrentID(currentID - 1);
      } else if (event.key === "ArrowDown" && currentID < videos.length - 1) {
        setCurrentID(currentID + 1);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentID, videos]);

  useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.play()
          .then(() => console.log("Video is playing"))
          .catch(error => console.error("Error playing video:", error));
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing]);

  const handleSubscribe = () => {
    setSubscribe(!subscribe);
  };

  return (
    <div className='video' tabIndex={0}>
      <video className="video-player" src={url} autoPlay muted onClick={() => setPlaying(!playing)} ref={videoRef} />

      <div className='container'>
        <div className='header'>
          <div>
            <button className='button'><IoArrowBack style={{ color: "white", fontSize: "32px", padding: "10px" }} /></button>
          </div>
          <div>
            <button className='button'><BsThreeDotsVertical style={{ color: "white", fontSize: "32px", padding: "10px" }} /></button>
          </div>
        </div>

        <div className='sidePanel'>
          <div>
            <button className='button'><AiOutlineLike style={{ color: "white", fontSize: "32px" }} /></button>
            <p style={{ color: "white" }}>{likes}</p>
          </div>
          <div>
            <button className='button'><AiOutlineDislike style={{ color: "white", fontSize: "32px" }} /></button>
            <p style={{ color: "white" }}>{dislikes}</p>
          </div>
          <div>
            <button className='button'><CgComment style={{ color: "white", fontSize: "32px" }} /></button>
            <p style={{ color: "white" }}>{comments}</p>
          </div>
          <div>
            <button className='button'><PiShareFat style={{ color: "white", fontSize: "32px" }} /></button>
            <p style={{ color: "white" }}>Share</p>
          </div>
          <div>
            <button className='button'><IoMdSync style={{ color: "white", fontSize: "32px" }} /></button>
            <p style={{ color: "white" }}>Remix</p>
          </div>
        </div>

        <div className='footer' >
          <div className='vidDetails'>
            <RiUser3Line />
            <p>{channel}</p>
            <button className={subscribe ? 'subscribed' : 'subscribe'} onClick={handleSubscribe}>
              {subscribe ? "Subscribed" : "Subscribe"}
            </button>
          </div>
          <div className='vidDescription'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
