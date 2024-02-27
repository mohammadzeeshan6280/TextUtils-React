import "./App.css";
import About from "./components/About"; // import About
import Navbar from "./components/Navbar"; // import Navbar
import TextForm from "./components/TextForm"; // import TextForm
import Alert from "./components/Alert"; // import TextForm
import React, { useState } from "react";

// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      //Alert
      document.title = "TextUtils - Dark Mode"; // Title Change
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"; // Title change
    }
  };

  return (
    <>
    {/* <Router> */}


        {/* <Navbar title="Coder" aboutText="About us" contactMe="Contact us" />   */}
        {/*Navbar import call */}
        {/* <Navbar />  */} {/* Navbar default import call */}
        
        <Navbar title="Coder" aboutText="About "  contactMe="Contact us"  mode={mode}  toggleMode={toggleMode} />
        {/*Navbar import call */}
        <Alert alert={alert} /> {/* Alert Call */}
        {/* TextForm */}
        {/* <div className="container">
      <TextForm heading="Enter the text to analyze" mode={mode} /> */}
        <div className="container">
          {/* <Routes> */}
            {/* work now /users --> Component 1
              /users/home --> --> Component */}

          {/* <Route path="/about" element={<About />}>
          </Route> */}
            {/* <Route path="/textForm" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> }>
          </Route> */}

          {/* <Route exact path="/about" element={<About />}>
          </Route>

          <Route exact path="/textForm" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> }>
          </Route> */}
             
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> 
          {<About/> }   
          {/* About Call now */}

        {/* </Routes> */}
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
