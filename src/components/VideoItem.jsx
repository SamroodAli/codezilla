import PropTypes from 'prop-types';

const VideoItem = ({ video, onClick }) => {
  const { thumbnails, description, title } = video;

  return (
    <button type="button" onClick={onClick}>
      <img className="ui image" src={thumbnails.medium.url} alt={description} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </button>
  );
};

VideoItem.propTypes = {
  video: PropTypes.shape({
    thumbnails: PropTypes.shape({
      medium: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default VideoItem;
