import React from "react";
import Chatbot from "react-chatbot-kit";
import "./styles.css";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

export default function App() {
  return (
    <div>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}
