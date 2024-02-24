import React from 'react';
import './App.css';
import Video from './Components/Video';
import VideoList from './Components/VideoList';

function App() {
  return (
    <div className="App">
      <div className='video-player'>
        <Video videos={VideoList} />
      </div>
    </div>
  );
}

export default App;
