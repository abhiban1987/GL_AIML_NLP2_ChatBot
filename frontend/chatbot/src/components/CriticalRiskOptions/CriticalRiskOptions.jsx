import React from "react";

import "./CriticalRiskOptions.css";

const CriticalRiskOptions = (props) => {

  const options = [
    { text: "Not applicable", handler: props.actionProvider.handleDate, id: 1 },
    { text: "Bees", handler: props.actionProvider.handleDate, id: 2 },
    { text: "Blocking and isolation of energies", handler: props.actionProvider.handleDate, id: 3 },
    { text: "Burn", handler: props.actionProvider.handleDate, id: 4 },
    { text: "Chemical substances", handler: props.actionProvider.handleDate, id: 5 },
    { text: "Confined space", handler: props.actionProvider.handleDate, id: 6 },
    { text: "Cut", handler: props.actionProvider.handleDate, id: 7 },
    { text: "Electrical installation", handler: props.actionProvider.handleDate, id: 8 },
    { text: "Electrical Shock", handler: props.actionProvider.handleDate, id: 9 },
    { text: "Fall", handler: props.actionProvider.handleDate, id: 10 },
    { text: "Fall prevention", handler: props.actionProvider.handleDate, id: 11 },
    { text: "Fall prevention (same level)", handler: props.actionProvider.handleDate, id: 12 },
    { text: "Individual protection equipment", handler: props.actionProvider.handleDate, id: 13 },
    { text: "Liquid Metal", handler: props.actionProvider.handleDate, id: 14 },
    { text: "Machine Protection", handler: props.actionProvider.handleDate, id: 15 },
    { text: "Manual Tools", handler: props.actionProvider.handleDate, id: 16 },
    { text: "Others", handler: props.actionProvider.handleDate, id: 17 },
    { text: "Plates", handler: props.actionProvider.handleDate, id: 18 },
    { text: "Poll", handler: props.actionProvider.handleDate, id: 19 },
    { text: "Power lock", handler: props.actionProvider.handleDate, id: 20 },
    { text: "Pressed", handler: props.actionProvider.handleDate, id: 21 },
    { text: "Pressurized Systems", handler: props.actionProvider.handleDate, id: 22 },
    { text: "Pressurized Systems / Chemical Substances", handler: props.actionProvider.handleDate, id: 23 },
    { text: "Projection", handler: props.actionProvider.handleDate, id: 24 },
    { text: "Projection of fragments", handler: props.actionProvider.handleDate, id: 25 },
    { text: "Projection/Burning", handler: props.actionProvider.handleDate, id: 26 },
    { text: "Projection/Choco", handler: props.actionProvider.handleDate, id: 27 },
    { text: "Projection/Manual Tools", handler: props.actionProvider.handleDate, id: 28 },
    { text: "remains of choco", handler: props.actionProvider.handleDate, id: 29 },
    { text: "Suspended Loads", handler: props.actionProvider.handleDate, id: 30 },
    { text: "Traffic", handler: props.actionProvider.handleDate, id: 31 },
    { text: "Vehicles and Mobile Equipment", handler: props.actionProvider.handleDate, id: 32 },
    { text: "Venomous Animals", handler: props.actionProvider.handleDate, id: 33 },
  ];
  
  const criticalRiskMarkup = options.map((option) => (
    <button
      className="country-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <ul className="link-list">{criticalRiskMarkup}</ul>;
};

export default CriticalRiskOptions;
