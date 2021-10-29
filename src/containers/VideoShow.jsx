import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';
import VideoShow from '../components/VideoShow';

const VideoShowContainer = () => {
  const { currentVideo } = useSelector((state) => state);
  const { searchVideo } = useActions();

  return <VideoShow currentVideo={currentVideo} searchVideo={searchVideo} />;
};

export default VideoShowContainer;
