import React, { useState } from "react";

const Disp = () => {
  const [isMessageVisible, setMessageVisibility] = useState(false);

  const toggleMessage = () => {
    setMessageVisibility(!isMessageVisible);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {isMessageVisible ? "Hide message" : "Show message"}
      </button>
      {isMessageVisible && <p>hi, how are you?</p>}
    </div>
  );
};

export default Disp;
