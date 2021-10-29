import { combineReducers } from 'redux';
import videos from './videos';
import currentVideo from './currentVideo';
import theme from './theme';
import filters from './filters';

const reducers = combineReducers({
  videos,
  currentVideo,
  theme,
  filters,
});

export default reducers;
