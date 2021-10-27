import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useActions from '../hooks/useActions';

const VideoShow = () => {
  const currentVideo = useSelector(({ currentVideo }) => currentVideo);
  const { searchVideo } = useActions();
  const { id } = useParams();

  if (!currentVideo) {
    searchVideo(id);
    return <div>Loading</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${currentVideo.id.videoId}`;
  const { description, title } = currentVideo.snippet;

  return (
    <div>
      <ReactPlayer url={videoUrl} controls playing />
      <h4 className="ui header">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default VideoShow;
