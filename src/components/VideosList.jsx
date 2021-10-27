import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import VideoItem from './VideoItem';
import useActions from '../hooks/useActions';

const VideoList = () => {
  const { videos, filters } = useSelector((state) => state);
  const { setCurrentVideo, searchVideos } = useActions();

  useEffect(() => {
    searchVideos();
  }, []);

  const courses = Object.entries(filters).reduce((prev, [category, isSelected]) => {
    if (isSelected && videos[category]) {
      return [...prev, ...videos[category]];
    }
    return [...prev];
  }, []);

  const videoItems = courses.map((video) => (
    <Link to={`/${video.etag}`} key={video.etag} onClick={() => setCurrentVideo(video)}>
      <VideoItem video={video.snippet} />
    </Link>
  ));

  return <div>{videoItems}</div>;
};

export default VideoList;
