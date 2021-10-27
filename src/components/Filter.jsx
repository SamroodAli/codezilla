import { useSelector } from 'react-redux';

import {
  Checkbox,
  LABEL_PLACEMENT,
} from 'baseui/checkbox';
import { Label1 } from 'baseui/typography';
import useActions from '../hooks/useActions';

const COURSES = [
  'React',
  'Vue',
  'Angular',
  'Functional Programming',
  'Microservices',
  'JAM Stack',
  'Object Oriented Programming',
];

const Filter = () => {
  const { setFilter } = useActions();
  const filterState = useSelector(({ filters }) => filters);

  return (
    <form>
      {COURSES.map((course) => (
        <label htmlFor="React" key={course}>
          <Checkbox
            checked={filterState[course]}
            onChange={() => setFilter(course)}
            labelPlacement={LABEL_PLACEMENT.right}
          >
            <Label1>
              {course}
            </Label1>
          </Checkbox>
        </label>
      ))}
    </form>
  );
};

export default Filter;
