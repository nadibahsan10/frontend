import React from "react";
import { Routes, Route } from "react-router-dom";

import InboxHome from "./pages/InboxHome";

const Inbox = () => {
  return (
    <Routes>
      <Route path="/*" element={<InboxHome />} />
      
    </Routes>
  );
};

export default Inbox;
