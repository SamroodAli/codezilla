import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import CoursesListPage from '../components/CoursesListPage';

describe('Testing CoursesListPage', () => {
  it('CoursesListPage is defined', async () => {
    const courses = render(<CoursesListPage courses={[]} />);
    expect(courses).toBeDefined();
  });

  it('CoursesListPage snapshot testing', () => {
    const tree = renderer.create(<CoursesListPage courses={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
