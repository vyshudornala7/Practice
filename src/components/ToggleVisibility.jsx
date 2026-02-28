import React, { useState } from "react";

const ToggleVisibility = () => {
const [showDetails, setShowDetails] = useState(false);
const handleToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <p>
          Hey..! This is secret.
        </p>
      )}
    </div>
  );
};

export default ToggleVisibility;