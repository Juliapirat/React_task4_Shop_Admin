import React, { useState } from "react";

export default function Item(props) {
  const [t, setTotal] = useState(0);
  const { info } = props;
  console.log(info);

  function handleAddClick() {
    setTotal((t) => (info.total = t + 1));
  }
  function handleRemoveClick() {
    if (t > 0) {
      setTotal((t) => (info.total = t - 1));
    }
  }
  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="item-info">
        <h2 className="item-title">{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-button"
          disabled={info.total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{info.total ? info.total : "0"}</h3>
        <button className="item-button" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
