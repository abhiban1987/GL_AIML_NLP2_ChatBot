import React from "react";

import "./RiskLevelPredictor.css";

const RiskLevelPredictor = (props) => {
  const options = [
    { text: "Thanks for the input. Your risk level is: 1", handler: props.actionProvider.handleDescription, id: 1 },
  ];

  const optionsMarkup = options.map((option) => (
    <input type="text" value={option.text} onChange={option.handler} readOnly= {true} />

  ));

  return <div className="country-options-container">{optionsMarkup}</div>;
};

export default RiskLevelPredictor;
