import { useEffect, useState } from "react";

const CustomTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count}`;
  }, [count]);

  const clickHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
        <h1>useEffect Exercise 2</h1>
      <p onClick={clickHandler} style={{ fontSize: `${(count + 1) * 1.2}rem` }}>
        I have been clicked {count} times
      </p>
      <hr></hr>
    </div>
  );
};
export default CustomTitle;
