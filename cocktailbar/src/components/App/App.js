import './App.css';
import Button from "../Button/Button";
import Container from '../Container/Container';
import { useState } from "react";



function App() {

  const [data, setData] = useState('');

   function uplift(ingredient) {
    return(
    setData(ingredient)
    )};

    console.log(data);

  return (
    <div className="App">
      <Button onClick = {uplift} drink={"blue%20margarita"}/>
      <Button onClick = {uplift} drink={"strawberry%20shivers"}/>
      <Button onClick = {uplift} drink={"blue%20lagoon"}/>

      {/* <Container /> */}
    </div>
  );
}


export default App;