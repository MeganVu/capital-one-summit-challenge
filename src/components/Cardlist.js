// This component is used to display a list of individual search results.
// It takes in the results from the 'activities/parks' API call and filters out the necessary information to display in the search results.
import React from "react";
import Card from "./Card";
import "bulma/css/bulma.min.css";

export default function Cardlist({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.data[0].parks || [];
  }

  return (
    <div className="card">
      {data.map((item) => (
        <Card
          key={item.fullName}
          state={item.states}
          id={item.parkCode}
          item={item}
        />
      ))}
    </div>
  );
}
