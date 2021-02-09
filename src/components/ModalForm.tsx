import * as React from "react";
import { useState } from "react";
import "../css/ModalForm.css";

function ModalForm(props: MFProps) {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  function handleTextChange(text: string) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div
      className={`float-label ${"normal" === props.size ? null : props.size}`}
    >
      <input
        type={props.type}
        value={value}
        min={props.type === "number" ? 0 : undefined}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <label className={isActive ? "Active" : ""} htmlFor={props.type}>
        {props.type}
      </label>
    </div>
  );
}

export default ModalForm;

interface MFProps {
  size: "small" | "normal" | "large";
  type: string;
}
