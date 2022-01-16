import React from "react";

import "./IndustryOptions.css";

const IndustryOptions = (props) => {

  const options = [
    { text: "Mining", handler: props.actionProvider.handleIndustryOptions, id: 1 },
    { text: "Metals", handler: props.actionProvider.handleIndustryOptions, id: 2 },
    { text: "Others", handler: props.actionProvider.handleIndustryOptions, id: 3 },
  ];
  
  const industryMarkup = options.map((option) => (
    <button
      className="country-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <ul className="link-list">{industryMarkup}</ul>;
};

export default IndustryOptions;
