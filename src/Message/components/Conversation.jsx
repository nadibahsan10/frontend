import React from "react";

import { Sent, Recived } from "./Text";
import "./Conversation.css";

const Conversation = () => {
  return (
    <div className="message-conversation">
      <Sent message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa quisquam quas assumenda autem ullam ipsam sint ad dolor similique." />
      <Recived message="Lorem ipsum dolor sit amet consectetur adipisicing elit" />

      <Recived message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa quisquam quas assumenda autem ullam ipsa" />
      <Sent message="Lorem ipsum dolor sit amet consectetur g elit." />
      <Recived message="Lorem ipsum dolor sit " />
      <Sent message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa quisquam quas assumenda autem" />
    </div>
  );
};

export default Conversation;
