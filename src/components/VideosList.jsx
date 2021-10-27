import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';
import Paginator from './Pagination';
import CoursesListPage from './CoursesListPage';

const VideoList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { videos, filters } = useSelector((state) => state);
  const { searchVideos } = useActions();
  const coursesPerPage = 8;

  useEffect(() => {
    searchVideos();
  }, []);

  const courses = Object.entries(filters).reduce((prev, [category, isSelected]) => {
    if (isSelected && videos[category]) {
      return [...prev, ...videos[category]];
    }
    return [...prev];
  }, []);

  const paginate = (
    courses,
  ) => courses.slice((currentPage - 1) * coursesPerPage, currentPage * coursesPerPage);

  return (
    <div>
      <Paginator
        pages={Math.ceil(courses.length / coursesPerPage)}
        currentPage={Math.ceil(currentPage)}
        setCurrentPage={setCurrentPage}
      />
      <CoursesListPage courses={paginate(courses)} />
    </div>
  );
};

export default VideoList;
