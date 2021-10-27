import PropTypes from 'prop-types';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';

const VideoItem = ({ video }) => {
  const { thumbnails, description, title } = video;

  return (
    <Card
      overrides={{ Root: { style: { width: '328px' } } }}
      headerImage={thumbnails.medium.url}
      title={title}
      alt={description}

    >
      <StyledBody>
        {description}
      </StyledBody>
      <StyledAction>
        <Button overrides={{ BaseButton: { style: { width: '100%' } } }}>
          Watch course
        </Button>
      </StyledAction>
    </Card>

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
};
export default VideoItem;
