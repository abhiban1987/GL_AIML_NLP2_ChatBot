class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleCountryOptions = () => {
    const message = this.createChatBotMessage(
      "Thanks for the input. Which city you belong to:",
      {
        widget: "cityOptions",
      }
    );

    this.updateChatbotState(message);
  };

  handleCityOptions = () => {
    const message = this.createChatBotMessage(
      "Thanks for the input. Which industry you belong to:",
      {
        widget: "industryOptions",
      }
    );

    this.updateChatbotState(message);
  };

  handleIndustryOptions = () => {
    const message = this.createChatBotMessage(
      "Thanks for the input. Are you a male or female?",
      {
        widget: "genderOptions",
      }
    );

    this.updateChatbotState(message);
  };

  handleGenderOptions = () => {
    const message = this.createChatBotMessage(
      "Thanks for the input. Which of the following risk scenarious you faced:",
      {
        widget: "criticalRiskOptions",
      }
    );

    this.updateChatbotState(message);
  };

  handleCriticalRiskOptions = () => {
    const message = this.createChatBotMessage(
      "Thanks for the input. Which of the following risk scenarious you faced:",
      {
        widget: "criticalRiskOptions",
      }
    );

    this.updateChatbotState(message);
  };

  handleDate = () => {
    const message = this.createChatBotMessage(
      "Thanks for the input. When did the incident occur:",
      {
        widget: "dateSelector",
      }
    );

    this.updateChatbotState(message);
  };

  handleDescription = () => {
    const message = this.createChatBotMessage(
      "Thanks for the input. Could you please provide a description of the event:",
    );

    this.updateChatbotState(message);
  };

  showRiskLevel = () => {
    const message = this.createChatBotMessage(
      "Thanks for the input. Your risk level is: 1",
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
