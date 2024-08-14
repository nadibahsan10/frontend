import React from "react";

import "./Text.css";

export const Sent = (props) => {
  return (
    <div className="recived-body">
      <p style={{ margin: 0 }}>{props.message}</p>
    </div>
  );
};

export const Recived = (props) => {
  return (
    <div className="sent-body">
      <p style={{ margin: 0 }}>{props.message}</p>
    </div>
  );
};
