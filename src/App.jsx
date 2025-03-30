import React, { useState } from "react";
import "./App.css";
import CodeExportModal from "./components/popup"; 

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <button className="export-button" onClick={handleClick}>
        EXPORT CODE
      </button>

      {showPopup && <CodeExportModal onClose={closePopup} />}
    </div>
  );
};

export default App;