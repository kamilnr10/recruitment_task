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
    items: [...initialStateItems],
    modal: {
      open: false,
      item_type: "simple",
      parent_key: false,
    },
  };

  openModal = (type, parent_key = false) => {
    this.setState({
      modal: {
        open: true,
        item_type: type,
        parent_key: parent_key,
      },
    });
  };

  closeModal = () => {
    this.setState({
      modal: {
        open: false,
        item_type: "simple",
        parent_key: false,
      },
    });
  };

  addItem = (text) => {
    let items = [...this.state.items];
    if (this.state.modal.item_type === "simple") {
      items.push({
        key: Date.now(),
        text: text,
        type: "simple",
        sub_items: [],
      });
    } else {
      let index = items.findIndex(
        (item) => item.key === this.state.modal.parent_key
      );
      items[index].sub_items.push(text);
    }

    this.setState({
      items: items,
    });
    this.closeModal();
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
        {this.state.modal.open ? (
          <Modal closeModalFn={this.closeModal} addItemFn={this.addItem} />
        ) : (
          <section className="app">
            <Header text={"People"} styles={"header"} />
            <div className="items_container">
              <ItemsList
                items={this.state.items}
                deleteItemFn={this.deleteItemFn}
                addItemFn={this.addItem}
                deleteSubItemFn={this.deleteSubItemFn}
                openModalFn={this.openModal}
              />
            </div>
            <Button
              openModalFn={() => this.openModal("simple")}
              styles={"button"}
            />
          </section>
        )}
      </>
    );
  }
}

export default App;
