import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';

import Courses from '../components/Courses';

describe('Testing Courses with redux', () => {
  it('Courses is defined', async () => {
    const courses = render(withRedux(<Courses />));
    expect(courses).toBeDefined();
  });

  it('Courses snapshot testing', () => {
    const tree = renderer.create(withRedux(<Courses />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
