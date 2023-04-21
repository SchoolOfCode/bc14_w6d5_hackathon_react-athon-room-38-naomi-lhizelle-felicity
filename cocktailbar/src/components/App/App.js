// Importing the necessary components and modules.
import './App.css'; 
import Button from "../Button/Button";
import Container from '../Container/Container';
import { useState } from "react";

// Defining the main function of the application.
function App() {
  // Using the useState hook to create a state variable called "data" and a function called "setData".
  const [data, setData] = useState('');

  // Defining a function called "uplift" that takes an argument called "ingredient" and sets the value of "data" to the value of "ingredient".
  function uplift(ingredient) {
    setData(ingredient)
  };

  // Logging the current value of "data" to the console.
  console.log(data);

  // Returning the main layout of the application, consisting of a heading and two child components (Button and Container).
  return <div className="page-container">
    <h1>The Night Jar</h1>
    <div className="App">
      <div className="button-container">
        <Button uplift={uplift} drink={"blue%20margarita"} /> {/* A button that, when clicked, sets the value of "data" to "blue margarita". */}
        <Button uplift={uplift} drink={"strawberry%20shivers"} /> {/* A button that, when clicked, sets the value of "data" to "strawberry shivers". */}
        <Button uplift={uplift} drink={"blue%20lagoon"} /> {/* A button that, when clicked, sets the value of "data" to "blue lagoon". */}
      </div>
      <Container data={data} /> {/* A child component that receives the value of "data" as a prop. */}
    </div>
  </div>
};

// Exporting the App component as the default export of this module.
export default App;