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

  return (
    <div className="App">
      <Button uplift = {uplift} drink={"blue%20margarita"}/>
      <Button uplift = {uplift} drink={"strawberry%20shivers"}/>
      <Button uplift = {uplift} drink={"blue%20lagoon"}/>

      <Container data ={data}/>
    </div>
  );
}


export default App;