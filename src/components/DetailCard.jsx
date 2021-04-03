import React from "react";

const DetailCard = ({ result }) => {
  if (!result) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${result.id.videoId}`

  return (
    <div>
        <div className="ui embed">
            <iframe title="embedded video player" src={videoSrc} />
        </div>
      <div className="ui segment">
        <h4 className="ui header">{result.snippet.title}</h4>
          <p>{result.snippet.description}</p>
      </div>
    </div>
  );
};

export default DetailCard;
