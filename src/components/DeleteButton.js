import React from "react";

const DeleteButton = () => {
  return (
    <div>
      <button
        onClick={() => this.deleteItem(this.props.item.key)}
        className="minus-button"
      >
        &#8722;
      </button>
    </div>
  );
};

export default DeleteButton;
