import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const VideoShow = () => {
  const currentVideo = useSelector(({ currentVideo }) => currentVideo);
  if (!currentVideo) {
    return <div>Loading</div>;
  }

  const { thumbnails, description, title } = currentVideo.snippet;

  return (
    <div>
      <img className="ui image" src={thumbnails.medium.url} alt={description} />
      <div className="content">
        <div className="header">{title}</div>
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
