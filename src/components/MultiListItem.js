import React, { Component } from "react";
import Button from "./Button";
import Header from "./Header";

class MultiListItem extends Component {
  state = {
    new_item: "polak",
    type: "multi",
  };

  deleteItem = (key) => {
    this.props.deleteItemFn(key);
  };

  deleteSubItem = (item) => {
    this.props.deleteSubItemFn(this.props.item.key, item);
  };

  handleInput = (e) => {
    this.setState({
      new_item: e.target.value,
    });
  };

  render() {
    const sub_list2 = this.props.item.sub_items.map((item) => (
      <div key={Math.floor(Math.random() * Math.floor(1000000))}>
        <div className={"sublist_item"}>
          <div className={"sublist_box1"}></div>
          <div className={"sublist_box2"}></div>
          <div className={"sublist_box3"}>
            <div className={"sublist_box4"}>
              <p className={"sublist_box4_text"}>{item}</p>
            </div>
            <div className={"sublist_box5"}>
              <button
                onClick={() => this.deleteSubItem(item)}
                className="minus-button"
              >
                &#8722;
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="item" key={this.props.item.key}>
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3">
            <div className="box4">
              <div className="sublist_wrapper">
                <div className="sublist_main">
                  <Header text={this.props.item.text} styles="sublist_header" />
                  <button
                    onClick={() => this.deleteItem(this.props.item.key)}
                    className="minus-button"
                  >
                    &#8722;
                  </button>
                </div>
                <div className="sublist-items-container"> {sub_list2}</div>

                <Button
                  openModalFn={() =>
                    this.props.openModalFn(this.state.type, this.props.item.key)
                  }
                  styles={"sublist_button"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MultiListItem;
