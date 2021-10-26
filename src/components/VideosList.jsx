import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';

const VideoList = () => {
  const videos = useSelector(({ videos }) => videos);

  const videoItems = videos.map((video) => (
    <VideoItem video={video.snippet} key={video.eTag} />
  ));

  return <div>{videoItems}</div>;
};

export default VideoList;
