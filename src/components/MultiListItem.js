import React, { Component } from "react";
import Button from "./Button";
import Header from "./Header";
// import Modal from "./Modal";
import styles from "./MultiListItem.module.css";

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

  // addSubItem = () => {
  //   this.props.addSubItemFn(this.props.item.key, this.state.new_item);
  // };

  handleInput = (e) => {
    this.setState({
      new_item: e.target.value,
    });
  };

  // openModal = () => {
  //   this.props.openModalFn("multi",);
  // };

  render() {
    const sub_list2 = this.props.item.sub_items.map((item) => (
      <div
        className="items-container"
        key={Math.floor(Math.random() * Math.floor(1000000))}
      >
        <div className={styles.sublist_item}>
          <div className={styles.sublist_box1}></div>
          <div className={styles.sublist_box2}></div>
          <div className={styles.sublist_box3}>
            <div className={styles.sublist_box4}>
              <p className={styles.sublist_box4_text}>{item}</p>
            </div>
            <div className={styles.sublist_box5}>
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
              <div className={styles.sublist_wrapper}>
                <div className={styles.sublist_main}>
                  <Header
                    text={this.props.item.text}
                    styles={styles.sublist_header}
                  />
                  <button
                    onClick={() => this.deleteItem(this.props.item.key)}
                    className="minus-button"
                  >
                    &#8722;
                  </button>
                </div>
                {sub_list2}
                <Button
                  openModalFn={() =>
                    this.props.openModalFn(this.state.type, this.props.item.key)
                  }
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
