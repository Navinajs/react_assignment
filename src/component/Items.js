import React, { useState } from "react";

const Items = ({ name, image, cal, onClick }) => {
  const [count, setCount] = useState(1);

  const handleItem = () => {
    onClick(name, count);
  };

  return (
    <div className="container">
      <div className="item">
        <div class="image">
          <img src={image} alt={name} height="60px" width="60px" />
        </div>
        <div>
          <p>
            <strong>{name}</strong>
          </p>
          <p>{cal}</p>
        </div>
        <div className="counter">
          <input
            type="number"
            className="countbox"
            placeholder=""
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button onClick={handleItem}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
