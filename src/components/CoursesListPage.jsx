import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const CoursesListPage = ({ setCurrentVideo, courses }) => (
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

CoursesListPage.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setCurrentVideo: PropTypes.func.isRequired,
};

export default CoursesListPage;
