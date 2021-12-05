import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import CountryOptions from "./components/CountryOptions/CountryOptions";
import LinkList from "./components/LinkList/LinkList";

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
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Mining",
            id: 1,
          },
          {
            text: "Metals",
            id: 2,
          },
          {
            text: "Others",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
