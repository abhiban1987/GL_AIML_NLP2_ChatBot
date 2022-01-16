import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import CountryOptions from "./components/CountryOptions/CountryOptions";
import CityOptions from "./components/CityOptions/CityOptions";
import IndustryOptions from "./components/IndustryOptions/IndustryOptions";
import GenderOptions from "./components/GenderOptions/GenderOptions";
import EmployeeOptions from "./components/EmployeeOptions/EmployeeOptions";
import CriticalRiskOptions from "./components/CriticalRiskOptions/CriticalRiskOptions";
import DateSelector from "./components/DateSelector/DateSelector";
import DescriptionFetcher from "./components/DescriptionFetcher/DescriptionFetcher";
import RiskLevelPredictor from "./components/RiskLevelPredictor/RiskLevelPredictor";

const config = {
  botName: "RiskAssistanceBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. Where are you from?", {
      widget: "countryOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "countryOptions",
      widgetFunc: (props) => <CountryOptions {...props} />,
    },
    {
      widgetName: "cityOptions",
      widgetFunc: (props) => <CityOptions {...props} />,
    },
    {
      widgetName: "industryOptions",
      widgetFunc: (props) => <IndustryOptions {...props} />,
    },
    {
      widgetName: "genderOptions",
      widgetFunc: (props) => <GenderOptions {...props} />,
    },
    {
      widgetName: "employeeOptions",
      widgetFunc: (props) => <EmployeeOptions {...props} />,
    },
    {
      widgetName: "criticalRiskOptions",
      widgetFunc: (props) => <CriticalRiskOptions {...props} />,
    },
    {
      widgetName: "dateSelector",
      widgetFunc: (props) => <DateSelector {...props} />,
    },
    {
      widgetName: "descriptionFetcher",
      widgetFunc: (props) => <DescriptionFetcher {...props} />,
    },
    {
      widgetName: "riskLevelPredictor",
      widgetFunc: (props) => <RiskLevelPredictor {...props} />,
    },
  ],
};

export default config;
