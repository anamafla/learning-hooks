import React, { useState, useEffect } from "react";

export default function Greeting(props) {
  const name = useFormInput("Ana");
  const [surname, setSurname] = useState("Mafla");

  const width = useWindowWidth();

  useDocumentTitle(name.value + "" + surname);

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <section>
      <row>
        <label>Name</label>
        <input {...name} />
      </row>
      <row>
        <label>Surname</label>
        <input value={surname} onChange={handleSurnameChange} />
      </row>
      <row>
        <label>Width</label>
        {width}
      </row>
    </section>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}
