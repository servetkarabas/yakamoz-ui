import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import PropTypes from "prop-types";
import "../styles/Yakamoz.css";

const Yakamoz = ({ defaultKeyword }) => {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const search = () => {
      const yakamozApiUrl = `https://api.yakamozapi.dev/api/v2/entries/en/${keyword}`;
      const pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY;
      const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      const pexelsApiHeaders = { Authorization: pexelsApiKey };

      axios
        .get(yakamozApiUrl)
        .then(handleYakamozResponse)
        .catch((error) => {
          console.error("Error fetching yakamoz data:", error);
        });
      axios
        .get(pexelsApiUrl, { headers: pexelsApiHeaders })
        .then(handlePexelsResponse)
        .catch((error) => {
          console.error("Error fetching photos:", error);
        });
    };

    if (!loaded) {
      search();
      setLoaded(true);
    }
  }, [keyword, loaded]);

  const handlePexelsResponse = (response) => {
    setPhotos(response.data.photos);
  };

  const handleYakamozResponse = (response) => {
    setResults(response.data[0]);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoaded(false);
  };

  return (
    <div className="Yakamoz">
      <section>
        <div className="subheading">What is your interest?</div>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            name="keyword"
            onChange={handleKeywordChange}
            placeholder={defaultKeyword}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <div className="suggestions">
          Suggested concepts: cat, tree, code, sun...
        </div>
      </section>
      {results && <Results results={results} />}
      {photos && <Photos photos={photos} />}
    </div>
  );
};

Yakamoz.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
};

export default Yakamoz;
