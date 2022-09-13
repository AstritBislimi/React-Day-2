import { useEffect, useState } from "react";

const UserInfo = () => {
  const [info, setInfo] = useState({
    name: "Astrit",
    surname: "Bislimi",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setInfo({
        name: "BlueBerry",
        surname: "Jackson",
      });
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
        <h1>useEffect Exercise 3</h1>
      <p>
        Name: {info.name} Surname: {info.surname}
      </p>
      <hr></hr>
    </div>
  );
};

export default UserInfo;
