import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';
import CoursesListPage from '../components/CoursesListPage';

describe('Testing CoursesListPage with redux', () => {
  it('CoursesListPage is defined', async () => {
    const courses = render(withRedux(<CoursesListPage courses={[]} />));
    expect(courses).toBeDefined();
  });

  it('CoursesListPage snapshot testing', () => {
    const tree = renderer.create(withRedux(<CoursesListPage courses={[]} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
