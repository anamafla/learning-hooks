import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function ExampleUseEffect() {
  let [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://uinames.com/api/?amount=25&region=nigeria")
      .then(response => response.json())
      .then(data => {
        setNames(data);
      });
  }, []);

  return (
    <div>
      {names.map((item, i) => (
        <div key={i}>
          {item.name} {item.surname}
        </div>
      ))}
    </div>
  );
}
