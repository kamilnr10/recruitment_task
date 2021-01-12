import React from "react";

const Header = (props) => {
  return <h3 className={props.styles}>{props.text}</h3>;
};

export default Header;
