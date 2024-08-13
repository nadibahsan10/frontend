import React from "react";

import { Sent, Recived } from "./Text";
import "./Conversation.css";

const Conversation = () => {
  return (
    <div className="message-conversation">
      <Sent />
      <Recived />
      <Sent />
      <Recived />
      <Sent />
      <Recived />
      <Sent />
      <Recived />
      <Sent />
      <Recived />
      <Sent />
      <Recived />
      <Sent />
      <Recived />
      <Sent />
      <Recived />
    </div>
  );
};

export default Conversation;
