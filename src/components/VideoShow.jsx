import { useSelector } from 'react-redux';

const VideoShow = () => {
  const currentVideo = useSelector(({ currentVideo }) => currentVideo);

  const { description, title } = currentVideo.snippet;
  const videoUrl = `https://www.youtube.com/embed/${currentVideo.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoUrl} frameBorder="0" title={title} />
      </div>
      <div className="ui segment">
        <div className="content">
          <h4 className="ui header">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoShow;
