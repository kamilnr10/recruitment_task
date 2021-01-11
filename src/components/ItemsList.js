import React from "react";
import SimpleListItem from "../components/SimpleListItem";
import MultiListItem from "../components/MultiListItem";

const ItemsList = ({
  items,
  deleteItemFn,
  addSubItemFn,
  deleteSubItemFn,
  openModalFn,
}) => {
  const list = items.map((item) =>
    item.type === "simple" ? (
      <div key={item.key}>
        <SimpleListItem item={item} deleteItemFn={deleteItemFn} />
      </div>
    ) : (
      <div key={item.key}>
        <MultiListItem
          item={item}
          deleteItemFn={deleteItemFn}
          addSubItemFn={addSubItemFn}
          deleteSubItemFn={deleteSubItemFn}
          openModalFn={openModalFn}
        />
      </div>
    )
  );
  return <div>{list}</div>;
};

export default ItemsList;
