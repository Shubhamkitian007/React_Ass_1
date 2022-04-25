import React, { useState } from "react";
import "./style.css";

const Components = () => {
  const [toggle1, setShow1] = useState(false);
  const [toggle2, setShow2] = useState(false);

  return (
    <>
    <p className="head">Style Using Function & Class Components</p>
    
      <button className="btn1" onClick={() => setShow1(!toggle1)}>
        To See Styling in Functional Components
      </button>
      <button className="btn1" onClick={() => setShow2(!toggle2)}>To See Styling in Class Components</button>
      {toggle1 && (
        <p className="container1">
          <h1>This is created using Function Component</h1>
          <h2>This is using External CSS</h2>
          <p style = {{color:"blue"}}>This is Using Inline CSS</p>
        </p>
      )}
      {toggle2 && (
        <p className="container2">
          <h1>This is created using Class Component</h1>
          <h2>This is using External CSS</h2>
          <p style = {{color:"blue" }}>This is Using Inline CSS</p>
        </p>
      )}
    </>
  );
};

export default Components;
