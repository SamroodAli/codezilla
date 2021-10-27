import PropTypes from 'prop-types';
import { Card, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import { HeadingSmall } from 'baseui/typography';
import { Link } from 'react-router-dom';

const VideoItem = ({ video, link, onClick }) => {
  const { thumbnails, description, title } = video;

  return (
    <Card
      overrides={{ Root: { style: { margin: '1rem' } } }}
      headerImage={thumbnails.medium.url}
      alt={description}

    >
      <HeadingSmall overrides={{ Root: { style: { textDecoration: 'none' } } }}>
        {title}
      </HeadingSmall>
      <StyledAction>
        <Link to={`/courses/${link}`}>
          <Button overrides={{ BaseButton: { style: { width: '100%' } } }} onClick={onClick}>
            Watch course
          </Button>
        </Link>
      </StyledAction>
    </Card>

  );
};

VideoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
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
