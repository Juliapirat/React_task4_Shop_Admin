import React, { useState } from "react";
import uuid from "react-uuid";
import Item from "./Item.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const info = { name, desc, id: uuid() };
    setItems([...items, info]);
  }
  function handleItemDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function FirstItem() {
    if (items.length === 0) {
      return (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      );
    }
  }
  function validation() {
    if (name === "" || desc === "") {
      return <div className="validation">Заполнены не все поля!</div>;
    }
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name_item">Name:</label>
          <input
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc_item">Description:</label>
          <input
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-footer">
          {validation()}
          <input
            type="submit"
            className="ui-button"
            value="Добавить"
            disabled={!name || !desc}
          />
        </div>
      </form>
      {FirstItem()}
      <ul className="ui-list">
        {items.map((item, index) => (
          <li className="ui-item-list" key={index}>
            <Item info={item} />
            <button
              className="item-button"
              onClick={() => handleItemDelete(item.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
