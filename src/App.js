import React, { Component } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Modal from "./components/Modal";
import ItemsList from "./components/ItemsList";

const initialStateItems = [
  {
    key: Date.now(),
    text: "Age 40+",
    type: "simple",
    sub_items: [],
  },
  {
    key: Date.now() + 1,
    text: "Ethnicity",
    type: "multi",
    sub_items: ["black", "hispanic"],
  },
  {
    key: Date.now() + 2,
    text: "Income yearly 45k+ USD",
    type: "simple",
    sub_items: [],
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
      sub_items: [],
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));
    console.log(this.state.items);
  };

  deleteItemFn = (key) => {
    console.log("delete element o id: " + key);
    let items = [...this.state.items];
    items = items.filter((item) => item.key !== key);
    this.setState({
      items: items,
    });
  };

  deleteSubItemFn = (key, old_item) => {
    console.log("add sub item o id: " + key, old_item);
    let items = [...this.state.items];

    let index = items.findIndex((item) => item.key === key);
    items[index].sub_items = items[index].sub_items.filter(
      (item) => item !== old_item
    );
    this.setState({
      items: items,
    });
  };

  addSubItemFn = (key, new_item) => {
    console.log("add sub item o id: " + key, new_item);
    let items = [...this.state.items];

    let index = items.findIndex((item) => item.key === key);
    items[index].sub_items.push(new_item);

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
            <Header text={"People"} styles={"header"} />
            <div className="items-container">
              <ItemsList
                items={this.state.items}
                deleteItemFn={this.deleteItemFn}
                addSubItemFn={this.addSubItemFn}
                deleteSubItemFn={this.deleteSubItemFn}
                openModalFn={this.openModal}
              />
            </div>
            <Button openModalFn={this.openModal} />
          </section>
        )}
      </>
    );
  }
}

export default App;
