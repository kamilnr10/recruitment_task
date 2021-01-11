import React from "react";
// import Header from "./Header";
// import List from "./List";

// const Lists = (props) => {
//   const listItems = props.items.map((item) => (
//     <List delete={props.deleteItemFn} key={item.key} />
//   ));
//   return <div>{listItems}</div>;
// };

const Lists = ({ items, deleteItemFn }) => {
  console.log(deleteItemFn);

  const listItems = items.map((item) => (
    <div className="item" key={item.key}>
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3">
        <div className="box4">{item.text}</div>
        <div className="box5">
          <button
            onClick={() => deleteItemFn(item.key)}
            className="minus-button"
          >
            &#8722;
          </button>
        </div>
      </div>
    </div>
  ));
  return <div>{listItems}</div>;
};

export default Lists;
