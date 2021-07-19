import React from "react";
import "../css/SummaryModal.css";
import ModalForm from "./ModalForm";

function SummaryModal(props: SMProps) {
  return (
    <div className="summary-modal">
      <div className="section">
        <ModalForm
          handleChange={props.handleChange}
          size="normal"
          type="address"
        />
        <ModalForm
          handleChange={props.handleChange}
          size="small"
          type="number"
        />
      </div>
      <div className="section">
        <ModalForm
          handleChange={props.handleChange}
          size="small"
          type="postal"
        />
        <ModalForm
          handleChange={props.handleChange}
          size="normal"
          type="city"
        />
      </div>
      <div className="section">
        <ModalForm handleChange={props.handleChange} size="small" type="time" />
        <ModalForm
          handleChange={props.handleChange}
          size="normal"
          type="phone number"
        />
      </div>
      <div className="section">
        <ModalForm
          handleChange={props.handleChange}
          size="normal"
          type="firstname"
        />
        <ModalForm
          handleChange={props.handleChange}
          size="normal"
          type="surname"
        />
      </div>
    </div>
  );
}

export default SummaryModal;

interface SMProps {
  handleChange: any;
}
