import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import PropTypes from 'prop-types';
import data from '../../public/data/courses.json';

const initialState = {
  videos: [data],
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
export const store = mockStore(initialState);

const WithRedux = ({ children }) => (
  <Provider store={store}><StaticRouter>{children}</StaticRouter></Provider>
);

WithRedux.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithRedux;
