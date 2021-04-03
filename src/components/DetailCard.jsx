import React from "react";

const DetailCard = ({ result }) => {
  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{result.snippet.title}</h4>
          <p>{result.snippet.description}</p>
      </div>
    </div>
  );
};

export default DetailCard;
