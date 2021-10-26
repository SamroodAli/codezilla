import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const VideoShow = () => {
  const currentVideo = useSelector(({ currentVideo }) => currentVideo);
  if (!currentVideo) {
    return <div>Loading</div>;
  }

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

VideoShow.propTypes = {
  video: PropTypes.shape({
    thumbnails: PropTypes.shape({
      medium: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default VideoShow;
