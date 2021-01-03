import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Searchheader from "./components/search_header/search_header";
import Videodetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos))
      .then(setSelectedVideo(null));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const logoClick = () => {
    setSelectedVideo(null);
  };
  return (
    <div className={styles.app}>
      <Searchheader onSearch={search} logoClick={logoClick} />
      <div className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Videodetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            selectVideo={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
