// import React from "react";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    // setText("you have clicked change ")
    props.showAlert("converted to uppercase", "success") // Alert uppercase
  };

  // Lower Case Function
  const handleLowerClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("converted to lowercase", "success") // Alert lowercase
  };

  // Clear Function
  const handleClear = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Clear this message", "danger") // Alert clearText

  };

  // Copy Function
  const handleCopy = () => {
    console.log("Copy Text")
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copy this message", "info") // Alert copytext


  }

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra space", "warning") // Alert Remove extra Space

  }

  const handleOnChange = (event) => {
    // console.log("On Changed")
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // const [text, setText] = useState("Enter text here");
  // setText["Update value"]
  // set = "new Text" // wrong way chnage the state
  //  setText("new Text"); // Correct way chnage the state
  return (
    // <div>
    //   <h1>{props.heading}</h1>
    //   <div className="mb-3">
    //     <textarea
    //       className="form-control"
    //       id="myBox"
    //       rows="8"
    //       value={text}
    //       onChange={handleOnChange}
    //     ></textarea>
    //   </div>
    //   <button className="btn btn-primary" onClick={handleClick}>
    //     Convert Upper Case
    //   </button>
    // </div>

    <>
      <div className="container"  style={{color : props.mode==='dark' ? 'white' : '#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor : props.mode==='dark' ? 'gray' : 'white', color : props.mode === 'dark' ? 'white' : '#042743'}} 
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick} >
          Convert Upper Case
        </button>
        <button className="btn btn-danger ms-2" onClick={handleLowerClick}>
          Convert Lower Case
        </button>
        <button className="btn btn-warning ms-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-info ms-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-success ms-2" onClick={handleExtraSpace}>
          Extra Space Remove
        </button>
      </div>

      <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : '#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        {/* <p>{text}</p> */}
        <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
