import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { Block } from 'baseui/block';
import { H1, Paragraph1 } from 'baseui/typography';
import PropTypes from 'prop-types';

const VideoShow = ({ searchVideo, currentVideo }) => {
  const { id } = useParams();

  useEffect(() => {
    searchVideo(id);
  }, []);

  if (!currentVideo) {
    return <div>Loading</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${currentVideo.id.videoId}`;
  const { description, title } = currentVideo.snippet;

  return (
    <Block display="flex">
      <ReactPlayer url={videoUrl} controls playing />
      <Block>
        <H1>{title}</H1>
        <Paragraph1>{description}</Paragraph1>
      </Block>
    </Block>
  );
};

VideoShow.propTypes = {
  searchVideo: PropTypes.func.isRequired,
  currentVideo: PropTypes.shape({
    id: { videoId: PropTypes.string.isRequired },
    snippet: PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default VideoShow;
