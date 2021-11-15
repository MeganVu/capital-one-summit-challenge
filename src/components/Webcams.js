// This component is used to retrieve and display webcam images for each individual search result.
// This is done by passing in the park code from a specific result Card
import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";

export default function Webcams(props) {
  const { parkCode } = props;
  const [isLoaded, setLoaded] = useState(false);
  const [image, setImage] = useState([]);
  

  useEffect(() => {
    // method that uses the given API call to get webcam images
    // for each park, the park code is passed in to retrieve the set of all webcam images for that park
    const getImg = async (text) => {
      console.log(parkCode);
      const images = await axios.get(
        "https://developer.nps.gov/api/v1/webcams",
        {
          params: {
            parkCode: parkCode,
            api_key: "thWRqZEgwYO6QHLcPo3JpLYLJtoGmoMcXc0Y48HB",
          },
        }
      );
      setLoaded(true);
      const image = images?.images;
      console.log(image);
      console.log(isLoaded);
    };
    // call method to retrieve webcam information
    getImg();
  }, [parkCode]);

  // display webcam images in the search result
  if (!isLoaded) {
    return <h4>Loading...</h4>;
  } else if (image.length === 0) {
    return (
      <div>
        <p>There are no images available for this park.</p>
      </div>
    );
  } else if (image.length === 1 && image[0].images.length === 0) {
    return (
      <div>
        <p>There are no images available for this park.</p>
      </div>
    );
  } else {
    return (
      <div>
        {image.map((img) => {
          return img.images.map((entry) => {
            return <img src={entry.url} alt="" />;
          });
        })}
      </div>
    );
  }
}
