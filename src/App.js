import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Items from "./component/Items";
import appleImage from "./assets/images/apple.png";
import orangeImage from "./assets/images/orange.png";
import bananaImage from "./assets/images/banana.png";
import chocolateImage from "./assets/images/chocolate.png";
import datesImage from "./assets/images/dates.png";
import grapesImage from "./assets/images/grapes.png";
import noodlesImage from "./assets/images/noodles.png";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectItems, setSelectItems] = useState([]);
  const [, setCalories] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const items = [
    { src: appleImage, alt: "apple", name: "Apple", cal: 81 },
    { src: bananaImage, alt: "banana", name: "Banana", cal: 105 },
    { src: orangeImage, alt: "orange", name: "Orange", cal: 65 },
    { src: datesImage, alt: "dates", name: "Dates", cal: 228 },
    { src: chocolateImage, alt: "chocolate", name: "Chocolate", cal: 208 },
    { src: grapesImage, alt: "grapes", name: "Grapes", cal: 114 },
    { src: noodlesImage, alt: "noodles", name: "Noodles", cal: 159 },
  ];

  const addItem = (itemName, count) => {
    const selectedFruit = items.find((item) => item.name === itemName);
    const food_cal = selectedFruit.cal * parseInt(count, 10);
    const newItem = {
      name: itemName,
      quantity: count,
      calories: food_cal,
    };
    setSelectItems((prevItems) => [...prevItems, newItem]);
    setCalories((prevCalories) => prevCalories + food_cal);
    setTotalCalories((prevTotalCalories) => prevTotalCalories + food_cal);
  };

  const deleteItem = (index) => {
    const removedItem = selectItems[index];
    setSelectItems((prevItems) => prevItems.filter((item, i) => i !== index));
    setCalories((prevCalories) => prevCalories - removedItem.calories);
    setTotalCalories(
      (prevTotalCalories) => prevTotalCalories - removedItem.calories
    );
  };

  return (
    <div className="App">
      <Navbar />
      <h3 className="search">Search </h3>
      <input
        className="box"
        type="text"
        placeholder="Find a Food"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="Main">
        <div className="Menu">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((data, index) => (
              <Items
                key={index}
                name={data.name}
                image={data.src}
                cal={data.cal}
                onClick={addItem}
              />
            ))}
        </div>
        <div className="ItemStats">
          <p className="title">
            <strong>Today's Food {totalCalories} cal</strong>
          </p>
          {selectItems.map((item, index) => (
            <div key={index} className="itemList">
              {item.quantity} {item.name}={item.calories}
              <div className="delete_btn">
                <button className="delete" onClick={() => deleteItem(index)}>
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
