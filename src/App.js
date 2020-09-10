import React, { useEffect, useState, useCallback } from "react";
import "./styles.css";

const Item = ({ item, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(item);
  }, [onClick, item]);

  // const handleClick = useCallback(
  //   (item) => () => {
  //     onClick(item);
  //   },
  //   [onClick]
  // );

  useEffect(() => {
    console.log("핸들메소드 변경됨");
  }, [handleClick]);

  return <CustomButton onClick={handleClick} item={item} />;
};

const CustomButton = ({ item, onClick }) => {
  useEffect(() => {
    console.log("커스텀 변경됨");
  }, [onClick]);

  return <button onClick={onClick}>{item}</button>;
};

export default function App() {
  const [value, setValue] = useState(0);
  const onClick = useCallback((rrr) => {
    setValue((preValue) => {
      return preValue + 1;
    });
  }, []);

  return (
    <div className="App">
      <Item onClick={onClick} item={value} />
    </div>
  );
}
