
import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { CgComment } from "react-icons/cg";
import { PiShareFat } from "react-icons/pi";
import { IoMdSync } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import './Video.css';
import video1 from '../Videos/video1.mp4';

const Video = () => {
  return (
    <div className='video'>
      <video className="video-player" src={video1} />

      <div className='container'>
        <div className='header'>
          <div>
            <button className='button'><IoArrowBack style={{color: "white", fontSize: "32px", padding: "10px"}}/></button>
          </div>
          <div>
          <button className='button'><BsThreeDotsVertical style={{color: "white", fontSize: "32px", padding: "10px"}}/></button>
          </div>
        </div>
        
        <div className='sidePanel'>
          <div>
            <button className='button'><AiOutlineLike style={{color: "white", fontSize: "32px"}}/>
   </button>         <p style={{color: "white"}}>500</p>
          </div>
          <div>
            <button className='button'><AiOutlineDislike style={{color: "white", fontSize: "32px"}}/></button>
            <p style={{color: "white"}}>45</p>
          </div>
          <div>
            <button className='button'><CgComment style={{color: "white", fontSize: "32px"}}/>
        </button>    <p style={{color: "white"}}>1.2K</p>
          </div>
          <div>
            <button className='button'><PiShareFat style={{color: "white", fontSize: "32px"}}/>
        </button>    <p style={{color: "white"}}>Share</p>
          </div>
          <div>
            <button className='button'><IoMdSync style={{color: "white", fontSize: "32px"}}/>
          </button>  <p style={{color: "white"}}>Remix</p>
          </div>
        </div>

        <div className='footer'>
        <div className='vidDetails'>
            <RiUser3Line />
            <p>Channel Name</p>
            <button>Subscribe</button>
          </div>
          <div className='vidDescription'>
            <p className='description'>This is description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
