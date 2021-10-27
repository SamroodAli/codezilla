import { useSelector } from 'react-redux';

import {
  Checkbox,
  LABEL_PLACEMENT,
} from 'baseui/checkbox';
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

  return COURSES.map((course) => (
    <label htmlFor="React" key={course}>
      <Checkbox
        checked={filterState[course]}
        onChange={() => setFilter(course)}
        labelPlacement={LABEL_PLACEMENT.right}
        overrides={{
          Label: {
            style: (({ $theme }) => {
              console.log($theme);
              return { color: $theme.colors.primaryA, backgroundColor: $theme.colors.primaryB };
            }
            ),
          },
        }}
      >
        {course}

      </Checkbox>
    </label>
  ));
};

export default Filter;
