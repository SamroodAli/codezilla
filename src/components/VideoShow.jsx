import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
      <div className="ui embed">
        <iframe
          src={videoUrl}
          frameBorder="0"
          width="100%"
          height="90%"
          title={title}
        />
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