import React from "react";
import "../css/OverviewModal.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ModalForm from "./ModalForm";

function OverviewModal() {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="overview-modal">
      <div className="section">
        <ModalForm size="normal" type="address" />
        <ModalForm size="small" type="number" />
      </div>
      <div className="section">
        <ModalForm size="small" type="postal" />
        <ModalForm size="normal" type="city" />
      </div>
      <div className="section">
        <ModalForm size="small" type="time" />
        <ModalForm size="normal" type="phone number" />
      </div>
      <div className="section">
        <ModalForm size="normal" type="firstname" />
        <ModalForm size="normal" type="surname" />
      </div>
    </div>
  );
}

export default OverviewModal;
