import PropTypes from 'prop-types';
import {
  Checkbox,
  LABEL_PLACEMENT,
} from 'baseui/checkbox';

const COURSES = [
  'React',
  'Vue',
  'Angular',
  'Functional Programming',
  'Microservices',
  'JAM Stack',
  'Object Oriented Programming',
];

const Filter = ({ filterState, setFilter }) => COURSES.map((course) => (
  <label htmlFor="React" key={course}>
    <Checkbox
      checked={filterState[course]}
      onChange={() => setFilter(course)}
      labelPlacement={LABEL_PLACEMENT.right}
      overrides={{
        Label: {
          style:
              ((
                { $theme },
              ) => ({ color: $theme.colors.primaryA, backgroundColor: $theme.colors.primaryB })
              ),
        },
      }}
    >
      {course}

    </Checkbox>
  </label>
));

Filter.propTypes = {
  filterState: PropTypes.objectOf(PropTypes.bool).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
