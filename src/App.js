import './App.css';

// import BackendVideo from "./source/video.mp4"
import Video from './componets/Video';
import VideoMP4 from './source/video.mp4'
function App() {
  return (
    <div className="App">
      <h1>For You</h1>
      <div className='app_videos'>
        <Video
          url={VideoMP4}
          channel="Forever Mind"
          description="Heroizeb your life"
          song="Forever mind only you author"
          likes={100}
          messages={300}
          shares={450} />
      </div>
    </div>
  );
}

export default App;
