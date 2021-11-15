// This component is used to display each individual search result.
// props are passed in from Cardlist, since that is where the API call is filtered and processed.
import React from "react";
import "bulma/css/bulma.min.css";

import Webcams from "./Webcams.js";

export default function Card(props) {
  const { item } = props;
  console.log(item.images)

  return (
    <div className="card">
      <div className="card-image">
        <figure className="is-centered">
          <Webcams parkCode={item.parkCode} />
          <img src="" alt={item.fullName} />
          <div className="card-content">
            <header>Name: {item.fullName}</header>
            <span>State: {item.states}</span>
          </div>
        </figure>
      </div>
    </div>
  );
}
