import React from "react";

import "./GenderOptions.css";

const GenderOptions = (props) => {
  const options = [
    { text: "Male", handler: props.actionProvider.handleGenderOptions, id: 1 },
    { text: "Female", handler: props.actionProvider.handleGenderOptions, id: 2 },
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

export default GenderOptions;
