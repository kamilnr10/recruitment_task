import React from "react";

const List = (props) => {
  return (
    <div>
      <div className="item" key={props.item.key}>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3">
          <div className="box4">
            <p>{props.item.text}</p>
          </div>
          <div className="box5">
            <button
              onClick={() => props.deleteItemFn(props.item.key)}
              className="minus-button"
            >
              &#8722;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
