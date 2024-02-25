import React, { useState, useEffect, useRef } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import { CgComment } from "react-icons/cg";
import { PiShareFat } from "react-icons/pi";
import { IoMdSync } from "react-icons/io";
import { FaHeart, FaSadTear } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import IconPopup from './IconPop';
import './Video.css';

const Video = ({ videos }) => {
  const [currentID, setCurrentID] = useState(0);
  const { url, channel, description, likes, dislikes, comments } = videos[currentID];
  const [playing, setPlaying] = useState(true);
  const [subscribe, setSubscribe] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
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

  const handleLikes = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      if (disliked) {
        setDisliked(false);
        setDislikeCount(dislikeCount - 1);
      }
    } else {
      setLikeCount(likeCount - 1);
    }
    setLiked(!liked);
  };
  
  const handleDislikes = () => {
    if (!disliked) {
      setDislikeCount(dislikeCount + 1);
      if (liked) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    } else {
      setDislikeCount(dislikeCount - 1);
    }
    setDisliked(!disliked);
  };  
  
  return (
    <div className='video' tabIndex={0}>
      <video className="video-container" src={url} autoPlay muted onClick={() => setPlaying(!playing)} ref={videoRef} />

      <div className='container'>
        <div className='header'>
          <div>
            <button className='button' style={{marginLeft: "1vw"}}><IoArrowBack style={{ color: "white", fontSize: "2em", padding: "3%" }} /></button>
          </div>
          <div>
            <button className='button' style={{marginRight: "1vw"}}><BsThreeDotsVertical style={{ color: "white", fontSize: "2em", padding: "3%" }} /></button>
          </div>
        </div>

        <div className='sidePanel'>
          <div>
          <button className='button' onClick={handleLikes}>
              {liked ? <AiFillLike style={{ color: "white", fontSize: "2em" }} /> : <AiOutlineLike style={{ color: "white", fontSize: "2em" }} />}
            </button>
            <p style={{ color: "white" }}>{likeCount}</p>
          </div>
          <div>
          <button className='button' onClick={handleDislikes}>
              {disliked ? <AiFillDislike style={{ color: "white", fontSize: "2em" }} /> : <AiOutlineDislike style={{ color: "white", fontSize: "2em" }} />}
            </button>
            <p style={{ color: "white" }}>{dislikeCount}</p>
          </div>
          <div>
            <button className='button'><CgComment style={{ color: "white", fontSize: "2em" }} /></button>
            <p style={{ color: "white" }}>{comments}</p>
          </div>
          <div>
            <button className='button'><PiShareFat style={{ color: "white", fontSize: "2em" }} /></button>
            <p style={{ color: "white" }}>Share</p>
          </div>
          <div>
            <button className='button'><IoMdSync style={{ color: "white", fontSize: "2em" }} /></button>
            <p style={{ color: "white" }}>Remix</p>
          </div>
        </div>

        <div className='footer' >
          <div className='vidDetails'>
            <CgProfile style={{fontSize: "2em"}}/>
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
      {liked && <IconPopup icon={FaHeart} color="red" />}
      {disliked && <IconPopup icon={FaSadTear} color="blue" />}
    </div>
  );
};

export default Video;