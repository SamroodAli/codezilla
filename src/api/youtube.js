import Axios from 'axios';

const KEY = 'AIzaSyBwLLJpienG1XkcdyegtVKsgGdnzS3bUSI';
export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    type: 'video',
    key: KEY,
  },
});
