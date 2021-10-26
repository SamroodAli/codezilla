import Axios from 'axios';

const KEY = 'AIzaSyBwLLJpienG1XkcdyegtVKsgGdnzS3bUSI';

export const videoSearch = Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    type: 'video',
    key: KEY,
  },
});

export const videoListSearch = Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 1,
    type: 'video',
    key: KEY,
  },
});
