import React from "react";

import "./CityOptions.css";

const CityOptions = (props) => {

  const options = [
    { text: "Local_01", handler: props.actionProvider.handleCityOptions, id: 1 },
    { text: "Local_02", handler: props.actionProvider.handleCityOptions, id: 2 },
    { text: "Local_03", handler: props.actionProvider.handleCityOptions, id: 3 },
    { text: "Local_04", handler: props.actionProvider.handleCityOptions, id: 4 },
    { text: "Local_05", handler: props.actionProvider.handleCityOptions, id: 5 },
    { text: "Local_06", handler: props.actionProvider.handleCityOptions, id: 6 },
    { text: "Local_07", handler: props.actionProvider.handleCityOptions, id: 7 },
    { text: "Local_08", handler: props.actionProvider.handleCityOptions, id: 8 },
    { text: "Local_09", handler: props.actionProvider.handleCityOptions, id: 9 },
    { text: "Local_10", handler: props.actionProvider.handleCityOptions, id: 10 },
    { text: "Local_11", handler: props.actionProvider.handleCityOptions, id: 11 },
    { text: "Local_12", handler: props.actionProvider.handleCityOptions, id: 12 },
  ];
  
  const cityMarkup = options.map((option) => (
    <button
      className="country-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <ul className="link-list">{cityMarkup}</ul>;
};

export default CityOptions;
