import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
// import data from '../../public/data/courses.json';

const initialState = {
  videos: [],
  filters: {
    React: true,
    Angular: true,
    Vue: true,
    'Functional Programming': true,
    'Object Oriented Programming': true,
    Microservices: true,
    'JAM Stack': true,
  },
  theme: 'light',
  currentVideo: null,
};

const mockStore = configureStore([reduxThunk]);
const store = mockStore(initialState);

const withRedux = (component) => (
  <Provider store={store}><StaticRouter>{component}</StaticRouter></Provider>
);
export default withRedux;
