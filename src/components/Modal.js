import React, { Component } from "react";

class Modal extends Component {
  state = {
    text: "",
  };

  handleInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  // addNewItem = (e, key) => {
  // console.log(this.props.type);
  // console.log(this.props.list);
  // e.preventDefault();
  // const newItem = this.state.currentItem;

  // if (this.props.type === "simple") {
  // console.log(newItem);
  // const items = this.props.list;
  // items.push(newItem);
  // console.log(this.props.list);
  // this.props.closeModalFn();
  // }
  // if (this.props.type === "multi") {
  //   let items = [...this.props.list];
  //   console.log(items);

  //   let index = items.findIndex((item) => item.key === key);
  //   items[index].sub_items.push(newItem);
  // this.props.closeModalFn();
  // }
  // };

  addNewSubItem = (e) => {
    e.target.preventDefault();
    this.props.addItem(this.props.type, this.state.currentItem.key);
  };

  render() {
    return (
      <>
        <div className="modal-background">
          <div className="modal">
            <form onSubmit={this.addNewSubItem} className="modal-form">
              <input
                type="text"
                placeholder="Enter text"
                value={this.state.text}
                onChange={this.handleInput}
              />
              <button type="submit" className="modal-add-item-button">
                &#10010;
              </button>
              <button
                onClick={this.props.closeModalFn}
                className="modal-close-button"
              >
                &#10006;
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
