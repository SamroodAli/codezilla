import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';
import useActions from '../hooks/useActions';

const CoursesListPage = ({ courses }) => {
  const { setCurrentVideo } = useActions();
  return (
    <FlexGrid
      flexGridColumnCount={[1, 2, 2, 4]}
    >
      {courses.map((video) => (
        <FlexGridItem
          key={video.etag}
          backgroundColor="mono300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VideoItem
            video={video.snippet}
            link={video.etag}
            key={video.etag}
            onClick={() => { setCurrentVideo(video); }}
          />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
};

CoursesListPage.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CoursesListPage;
