import React from "react";
import styles from "./video_detail.module.css";

const Videodetail = ({ video: { snippet }, video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h2 className={styles.title}>{snippet.title}</h2>
      <h2 className={styles.channelTitle}>{snippet.channelTitle}</h2>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default Videodetail;
