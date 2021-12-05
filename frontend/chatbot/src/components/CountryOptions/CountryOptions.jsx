import React from "react";

import "./CountryOptions.css";

const CountryOptions = (props) => {
  const options = [
    {
      text: "Country 1", handler: props.actionProvider.handleJavascriptList, id: 1,
    },
    { text: "Country 2", handler: () => {}, id: 2 },
    { text: "Country 3", handler: () => {}, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="country-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="country-options-container">{optionsMarkup}</div>;
};

export default CountryOptions;
