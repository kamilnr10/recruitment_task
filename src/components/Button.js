import React from "react";

const Button = ({ openModalFn, styles }) => {
  return (
    <div className={styles}>
      <button onClick={openModalFn} className="sublist_add_btn">
        &#43;
      </button>
    </div>
  );
};

export default Button;
