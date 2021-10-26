import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import VideoItem from './VideoItem';
import useActions from '../hooks/useActions';

const VideoList = () => {
  const videos = useSelector(({ videos }) => videos);
  const { setCurrentVideo, searchVideos } = useActions();

  useEffect(() => {
    searchVideos('react');
  }, []);

  const videoItems = videos.map((video) => (
    <Link to={`/${video.etag}`} key={video.etag} onClick={() => setCurrentVideo(video)}>
      <VideoItem video={video.snippet} />
    </Link>
  ));

  return <div>{videoItems}</div>;
};

export default VideoList;
