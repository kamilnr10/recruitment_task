import React from "react";

const Button = ({ openModalFn }) => {
  return (
    <div className="button">
      <button onClick={openModalFn} className="plus-button">
        &#43;
      </button>
    </div>
  );
};

export default Button;
