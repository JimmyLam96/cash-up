import * as React from "react";
import { useForm } from "../utils/useForm";
import { useState } from "react";
import "../css/ModalForm.css";

function ModalForm(props: MFProps) {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const { handleChange } = useForm();
  
  //Hashmap that houses all the regular expressions for each special form.
  const hashMap = new Map();
  hashMap.set("postal", "[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z|A-Z]{2}");
  hashMap.set("time", "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$");
  hashMap.set("phone", "^00([0-24-9][0-9]|3[02-9])\s?-?\s?[1-9][0-9]{7,11}$");

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
        name={props.type}
        // type={props.type}
        value={value}
        pattern={hashMap.get(props.type) || undefined}
        // min={props.type === "number" ? 1 : undefined}
        onChange={(e) => {
          handleTextChange(e.target.value);
          handleChange(e)
        }}
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
