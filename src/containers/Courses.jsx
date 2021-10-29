import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';
import Courses from '../components/Courses';

const CoursesContainer = () => {
  const { videos, filters } = useSelector((state) => state);
  const { searchVideos } = useActions();
  return (
    <Courses filters={filters} videos={videos} searchVideos={searchVideos} />
  );
};

export default CoursesContainer;
