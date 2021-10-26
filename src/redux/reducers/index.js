import { combineReducers } from 'redux';
import videos from './videos';
import currentVideo from './currentVideo';

const reducers = combineReducers({
  videos,
  currentVideo,
});

export default reducers;
