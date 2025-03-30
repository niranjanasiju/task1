"use client";
import { SiReact, SiHtml5 } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import "./popup.css";

const CodeExportModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("nextjs");
  const [options, setOptions] = useState({
    useAppDir: true,
    includeAssets: true,
    includeCustomCode: true,
  });

  const handleOptionChange = (option) => {
    setOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-header-text">
            <h2 className="modal-title">Code Export</h2>
            <p className="modal-subtitle">Manage how you download your website's code.</p>
          </div>
          <button className="close-button" onClick={onClose}>
            <IoClose size={20} color="grey" />
          </button>
        </div>

        <div className="modal-content">
          <div className="tabs">
            <div className="tabs-header">
              <button
                className={`tab-button ${activeTab === "html" ? "active" : ""}`}
                onClick={() => setActiveTab("html")}
              >
                HTML & CSS
              </button>
              <button
                className={`tab-button ${activeTab === "nextjs" ? "active" : ""}`}
                onClick={() => setActiveTab("nextjs")}
              >
                Next.JS
              </button>
            </div>

            <div className="tab-content" style={{ display: activeTab === "html" ? "block" : "none" }}>
              <div className="export-header">
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <SiHtml5 size={20} color="white" />
                    <span className="export-title">Export as HTML & CSS</span>
                </div>
                <span className="export-badge">Zipped</span>
              </div>

              <div className="options">
                <div className="option">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={options.includeAssets}
                      onChange={() => handleOptionChange("includeAssets")}
                    />
                    <span className="checkmark"></span>
                    <span className="option-text">Include assets locally (images, styles, fonts, etc.)</span>
                  </label>
                </div>

                <div className="option">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={options.includeCustomCode}
                      onChange={() => handleOptionChange("includeCustomCode")}
                    />
                    <span className="checkmark"></span>
                    <span className="option-text">Include custom code</span>
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button className="download-button">Download HTML CSS Project</button>
              </div>
            </div>

            <div className="tab-content" style={{ display: activeTab === "nextjs" ? "block" : "none" }}>
              <div className="export-header">
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <SiReact size={20} color="white" />
                    <span className="export-title">Export as Next JS Project</span>
                </div>
                <span className="export-badge">Zipped</span>
              </div>

              <div className="options">
                <div className="option">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={options.useAppDir}
                      onChange={() => handleOptionChange("useAppDir")}
                    />
                    <span className="checkmark"></span>
                    <span className="option-text">Use 'app' directory (NextJS v13+)</span>
                  </label>
                </div>

                <div className="option">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={options.includeAssets}
                      onChange={() => handleOptionChange("includeAssets")}
                    />
                    <span className="checkmark"></span>
                    <span className="option-text">Include assets locally (images, styles, fonts, etc.)</span>
                  </label>
                </div>

                <div className="option">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={options.includeCustomCode}
                      onChange={() => handleOptionChange("includeCustomCode")}
                    />
                    <span className="checkmark"></span>
                    <span className="option-text">Include custom code</span>
                  </label>
                </div>
              </div>
                <div className="modal-footer">
                    <button className="download-button">Download Next JS Project</button>
                </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default CodeExportModal;