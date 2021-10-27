import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';
import Paginator from './Pagination';
import CoursesListPage from './CoursesListPage';

const VideoList = () => {
  const { videos, filters } = useSelector((state) => state);
  const { searchVideos } = useActions();

  useEffect(() => {
    searchVideos();
  }, []);

  const courses = Object.entries(filters).reduce((prev, [category, isSelected]) => {
    if (isSelected && videos[category]) {
      return [...prev, ...videos[category]];
    }
    return [...prev];
  }, []);

  return (
    <div>
      <Paginator pages={courses.length / 4} />
      <CoursesListPage courses={courses} />
    </div>
  );
};

export default VideoList;
