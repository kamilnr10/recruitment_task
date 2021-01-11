import React, { Component } from "react";
import Header from "./Header";
import Button from "./Button";
import Modal from "./Modal";
import Lists from "./Lists";

const initialStateItems = [
  {
    key: Date.now(),
    text: "Age 40+",
  },
  {
    key: Date.now() + 1,
    text: "Ethnicity",
  },
  {
    key: Date.now() + 2,
    text: "Income yearly 45k+ USD",
  },
];

class App extends Component {
  state = {
    isModalOpen: false,
    items: [...initialStateItems],
  };

  openModal = () => {
    console.log("handleButton click");
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target.value,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));
  };

  deleteItem = (key) => {
    console.log("delete element o id" + key);
    let items = [...this.state.items];
    items = items.filter((item) => item.key !== key);
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <>
        {this.state.isModalOpen ? (
          <Modal closeModalFn={this.closeModal} list={this.state.items} />
        ) : (
          <section className="app">
            <Header />
            <div className="items-container">
              <Lists items={this.state.items} deleteItemFn={this.deleteItem} />
            </div>
            <Button openModalFn={this.openModal} />
          </section>
        )}
      </>
    );
  }
}

export default App;
