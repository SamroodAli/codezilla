import { Link } from 'react-router-dom';
import VideoItem from './VideoItem';

const CoursesListPage = ({ courses }) => courses.map((video) => (
  <Link to={`/courses/${video.etag}`} key={video.etag}>
    <VideoItem video={video.snippet} />
  </Link>
));

export default CoursesListPage;
