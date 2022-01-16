import React from "react";

import "./EmployeeOptions.css";

const EmployeeOptions = (props) => {
  const options = [
    { text: "Employee", handler: props.actionProvider.handleCriticalRiskOptions, id: 1 },
    { text: "Third Party", handler: props.actionProvider.handleCriticalRiskOptions, id: 2 },
    { text: "Third Party (Remote)", handler: props.actionProvider.handleCriticalRiskOptions, id: 3 },
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

export default EmployeeOptions;
