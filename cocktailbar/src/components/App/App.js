import './App.css';
import Button from "../Button/Button";
import Container from '../Container/Container';
import { useState } from "react";


function App() {
  const [data, setData] = useState('');

   function uplift(ingredient) {
    setData(ingredient)
    };

    console.log(data);

  return <div className="page-container">
    <h1>The Night Jar</h1>
    <div className="App">
      <div className="button-container">
        <Button uplift = {uplift} drink={"blue%20margarita"}/>
        <Button uplift = {uplift} drink={"strawberry%20shivers"}/>
        <Button uplift = {uplift} drink={"blue%20lagoon"}/>
      </div>
      <Container data ={data}/>
    </div>
  </div>
};


export default App;