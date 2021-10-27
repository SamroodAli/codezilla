import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';

const COURSES = [
  'React',
  'Vue',
  'Angular',
  'Functional Programming',
  'Microservices',
  'JAM Stack',
];

const Filter = () => {
  const { setFilter } = useActions();
  const filterState = useSelector(({ filters }) => filters);

  return (
    <form>
      {COURSES.map((course) => (
        <label htmlFor="React" key={course}>
          {course}
          <input type="checkbox" id="css" onClick={() => setFilter(course)} checked={filterState[course]} />
        </label>
      ))}
    </form>
  );
};

export default Filter;
