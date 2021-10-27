import { Link } from 'react-router-dom';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const CoursesListPage = ({ courses }) => (
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
        <Link to={`/courses/${video.etag}`} key={video.etag}>
          <VideoItem video={video.snippet} />
        </Link>
      </FlexGridItem>
    ))}
  </FlexGrid>
);

CoursesListPage.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CoursesListPage;
