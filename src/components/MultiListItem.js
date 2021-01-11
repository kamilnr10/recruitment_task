import React, { Component } from "react";
import Button from "./Button";

class MultiListItem extends Component {
  state = {
    new_item: "polak",
  };

  deleteItem = (key) => {
    this.props.deleteItemFn(key);
  };

  deleteSubItem = (item) => {
    this.props.deleteSubItemFn(this.props.item.key, item);
  };

  addSubItem = () => {
    this.props.addSubItemFn(this.props.item.key, this.state.new_item);
  };

  handleInput = (e) => {
    this.setState({
      new_item: e.target.value,
    });
  };

  openModal = () => {
    this.props.openModalFn();
  };

  render() {
    const sub_list = this.props.item.sub_items.map((item) => (
      <div
        key={Math.floor(Math.random() * Math.floor(1000000))}
        className="box3"
      >
        <div className="box4">{item}</div>
        <div className="box5">
          <button
            onClick={() => this.deleteSubItem(item)}
            className="minus-button"
          >
            &#8722;
          </button>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="item" key={this.props.item.key}>
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3">
            <div className="box4">{this.props.item.text}</div>
            <div className="box5">
              <button
                onClick={() => this.deleteItem(this.props.item.key)}
                className="minus-button"
              >
                &#8722;
              </button>
            </div>
            <div className="box6">{sub_list}</div>
            <input
              type="text"
              placeholder="Enter text"
              value={this.state.new_item}
              onChange={this.handleInput}
            />

            <div className="button">
              {/* <button onClick={() => this.addSubItem()} className="plus-button">
                &#43;
              </button> */}
              <button onClick={this.openModal} className="plus-button">
                &#43;
              </button>
              {/* <Button openModalFn={this.openModal} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MultiListItem;
