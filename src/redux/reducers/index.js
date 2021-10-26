import { combineReducers } from 'redux';
import videos from './videos';
import currentVideo from './currentVideo';
import theme from './theme';

const reducers = combineReducers({
  videos,
  currentVideo,
  theme,
});

export default reducers;
