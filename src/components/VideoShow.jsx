import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { Block } from 'baseui/block';
import { H1, Paragraph1 } from 'baseui/typography';
import useActions from '../hooks/useActions';

const VideoShow = () => {
  const { currentVideo } = useSelector((state) => state);
  const { searchVideo } = useActions();
  const { id } = useParams();

  useEffect(() => {
    searchVideo(id);
  }, []);

  if (!currentVideo) {
    return <div>Loading</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${currentVideo.id.videoId}`;
  const { description, title } = currentVideo.snippet;

  return (
    <Block display="flex">
      <ReactPlayer url={videoUrl} controls playing />
      <Block>
        <H1>{title}</H1>
        <Paragraph1>{description}</Paragraph1>
      </Block>
    </Block>
  );
};

export default VideoShow;
