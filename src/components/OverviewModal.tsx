import React from "react";
import "../css/OverviewModal.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

function OverviewModal() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const { register, handleSubmit, errors } = useForm();

  function handleTextChange(text: string) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div className="overview-modal">
      <div className="section">
        <div className="float-label">
          <input
            type="address"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
          />
          <label className={isActive ? "Active" : ""} htmlFor="address">
            address
          </label>
        </div>
        <div className="float-label number-label">
          <input
            min={1}
            type="number"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
          />
          <label className={isActive ? "Active" : ""} htmlFor="housenumber">
            number
          </label>
        </div>
      </div>
      <div className="section">
        <div className="float-label number-label">
          <input
            min={1}
            type="postalcode"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
          />
          <label className={isActive ? "Active" : ""} htmlFor="postalcode">
            postalcode
          </label>
        </div>
        <div className="float-label">
          <input
            type="address"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
          />
          <label className={isActive ? "Active" : ""} htmlFor="email">
            city
          </label>
        </div>
      </div>
    </div>
  );
}

export default OverviewModal;
