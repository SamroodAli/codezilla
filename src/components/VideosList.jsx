import { useSelector } from 'react-redux';

const VideoList = () => {
  const videos = useSelector(({ videos }) => videos);

  const videoItems = videos.map((video) => (
    <VideoItem video={video} key={video.etag} />
  ));

  return <div>{videoItems}</div>;
};

export default VideoList;
