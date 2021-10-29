import PropTypes from 'prop-types';
import useActions from '../hooks/useActions';
import CoursesListPage from '../components/CoursesListPage';

const CoursesListPageContainer = ({ courses }) => {
  const { setCurrentVideo } = useActions();
  return <CoursesListPage courses={courses} setCurrentVideo={setCurrentVideo} />;
};

CoursesListPageContainer.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CoursesListPageContainer;
