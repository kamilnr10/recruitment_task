import React, { Component } from "react";

class Modal extends Component {
  state = {
    currentItem: {
      key: "",
      text: "",
    },
  };

  handleInput = (e) => {
    this.setState({
      currentItem: {
        key: Date.now(),
        text: e.target.value,
      },
    });
  };

  addNewItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    const items = this.props.list;
    items.push(newItem);
    console.log(this.props.list);
    this.props.closeModalFn();
  };

  render() {
    return (
      <>
        <div className="modal-background">
          <div className="modal">
            <form onSubmit={this.addNewItem} className="modal-form">
              <input
                type="text"
                placeholder="Enter text"
                value={this.state.currentItem.text}
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
