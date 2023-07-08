import React from "react";

const Button = ({ btn_type, text, onCick, type }) => {
  return (
    <button  style={{backgroundColor:"dodgerblue",width:"30%"}} type={type} className={"btn btn-" + btn_type} onClick={onCick}>
      {text}
    </button>
  );
};

export default Button;