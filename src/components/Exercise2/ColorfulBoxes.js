import { useState } from "react";

const ColorfulBoxes = () => {
  const [boxes, setBoxes] = useState([]);

  function addBoxHandler() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const box = (
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: randomColor,
        }}
      ></div>
    );
    setBoxes((prevState) => [...prevState, box]);
  }
  return (
    <div>
        <hr></hr>
        <h1>useState Exercise 2</h1>
      <button onClick={addBoxHandler}>Add Box</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {boxes.map((el) => el)}
      </div>
      <hr></hr>
    </div>
  );
};

export default ColorfulBoxes;
