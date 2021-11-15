// This component is used to display the search bar and process the queries that go into it.
import React, { useState } from "react";
import axios from "axios";
import Cardlist from "./Cardlist";

export default function Searchbar(props) {
  const [searchText, setSearchText] = useState("");
  const [state, setState] = useState({
    results: [],
  });
  // This is used to change the text query stored when the user changes their input.
  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
  };

  // This is used to call the method that makes the API call
  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      onSearch(searchText);
    }
  };

  // This method is used to make the API call. It uses the given call to retrieve the parks that offer a certain activity.
  // The query passed in is used to filter the list of all parks.
  const onSearch = async (text) => {
    const results = await axios.get(
      "https://developer.nps.gov/api/v1/activities/parks",
      {
        params: {
          q: text,
          api_key: "thWRqZEgwYO6QHLcPo3JpLYLJtoGmoMcXc0Y48HB",
        },
      }
    );

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="control">
      <input
        className="input"
        onChange={handleChange}
        onKeyPress={handleSubmit}
        value={searchText}
        type="text"
        placeholder="Enter an activity..."
      />
      <Cardlist results={state.results} />
    </div>
  );
}
