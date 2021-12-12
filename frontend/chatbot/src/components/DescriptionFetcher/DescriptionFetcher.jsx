import React from "react";

import "./DescriptionFetcher.css";

const DescriptionFetcher = (props) => {
  const options = [
    { text: "", handler: props.actionProvider.handleDescription, id: 1 },
  ];

  const optionsMarkup = options.map((option) => (
    <input type="text" value={option.text} onChange={option.handler} />

  ));

  return <div className="country-options-container">{optionsMarkup}</div>;
};

export default DescriptionFetcher;
