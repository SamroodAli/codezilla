import { useEffect, useState } from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import PropTypes from 'prop-types';
import Paginator from './Pagination';
import CoursesListPage from './CoursesListPage';
import FilterOptions from './Drawer';

const Courses = ({ videos, filters, searchVideos }) => {
  const [currentPage, setCurrentPage] = useState(1);
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
    <>
      <FlexGrid flexGridColumnCount={2} data-testid="courses">
        <FlexGridItem justifyContent="flex-start" display="flex">
          <Paginator
            pages={Math.ceil(courses.length / coursesPerPage)}
            currentPage={Math.ceil(currentPage)}
            setCurrentPage={setCurrentPage}
          />
        </FlexGridItem>
        <FlexGridItem
          justifyContent="flex-end"
          display="flex"
        >
          <FilterOptions />
        </FlexGridItem>

      </FlexGrid>
      <CoursesListPage courses={paginate(courses)} />
    </>
  );
};

Courses.propTypes = {
  videos: PropTypes.objectOf(PropTypes.array).isRequired,
  filters: PropTypes.objectOf(PropTypes.bool).isRequired,
  searchVideos: PropTypes.func.isRequired,
};

export default Courses;
