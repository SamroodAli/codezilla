import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';
import useActions from '../hooks/useActions';

const VideoList = () => {
  const videos = useSelector(({ videos }) => videos);
  const { setCurrentVideo } = useActions();

  const videoItems = videos.map((video) => (
    <VideoItem video={video.snippet} key={video.eTag} onClick={() => setCurrentVideo(video)} />
  ));

  return <div>{videoItems}</div>;
};

export default VideoList;
