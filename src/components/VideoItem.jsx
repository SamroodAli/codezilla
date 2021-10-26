const VideoItem = ({ video }) => {
  const { thumbnails, description, title } = video;

  return (
    <div>
      <img className="ui image" src={thumbnails.medium.url} alt={description} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
