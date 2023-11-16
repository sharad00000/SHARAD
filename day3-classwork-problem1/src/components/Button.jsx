import React, { useState } from "react";
const Disp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
      <p>{isChecked ? "SUPERSAIYAN" : "KAIOKEN"}</p>
    </div>
  );
};

export default Disp;
