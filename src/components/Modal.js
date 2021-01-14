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

  addNewItem = () => {
    this.props.addItemFn(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <>
        <div className="modal-background">
          <div className="modal">
            <input
              type="text"
              placeholder="Enter text"
              value={this.state.text}
              onChange={this.handleInput}
            />
            <button onClick={this.addNewItem} className="modal-add-item-button">
              &#10010;
            </button>
            <button
              onClick={this.props.closeModalFn}
              className="modal-close-button"
            >
              &#10006;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
