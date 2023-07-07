import React from "react";
import "./App.css"

// Here we are importing the component form
import Form from "./components/Form";

document.title = "Contact From"

const App = () => {
  
  return (
    <>
      <h1>Contact Form</h1>
      {/* Below part is the component we imported  */}
      <Form />  
    </>
  );
};

export default App;

// parent -> child
