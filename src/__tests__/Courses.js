import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Courses from '../components/Courses';

describe('Testing Courses with redux', () => {
  it('Courses is defined', async () => {
    const courses = render(<Courses />);
    const ele = await courses.findByTestId('courses');
    expect(ele).toBe([]);
  });

  it('Courses snapshot testing', () => {
    const tree = renderer.create(<Courses />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
