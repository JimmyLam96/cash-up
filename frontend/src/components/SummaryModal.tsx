import React from "react";
import "../css/SummaryModal.css";
import ModalForm from "./ModalForm";
import { FormProvider } from "../utils/useForm"


function SummaryModal() {
  return (
      <div className="summary-modal">
      <div className="section">
        <ModalForm
          size="normal"
          type="address"
        />
        <ModalForm
          size="small"
          type="number"
        />
      </div>
      <div className="section">
        <ModalForm
          size="small"
          type="postal"
        />
        <ModalForm
          size="normal"
          type="city"
        />
      </div>
      <div className="section">
        <ModalForm size="small" type="time" />
        <ModalForm
          size="normal"
          type="phone number"
        />
      </div>
      <div className="section">
        <ModalForm
          size="normal"
          type="firstname"
        />
        <ModalForm
          size="normal"
          type="surname"
        />
      </div>
    </div>
    
  );
}

export default SummaryModal;
