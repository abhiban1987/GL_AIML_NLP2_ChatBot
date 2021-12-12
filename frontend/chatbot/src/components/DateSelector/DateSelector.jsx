import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateSelector = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { text: "", handler: props.actionProvider.handleDescription, id: 1 },
  ];

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  const optionsMarkup = options.map((option) => (
    <DatePicker
       selected={startDate}
       onChange={(date) => setStartDate(date)}
       onCalendarClose={option.handler}
    />
  ));

  return <div className="country-options-container">{optionsMarkup}</div>;

};

export default DateSelector;
