import './App.css';
import Button from "../Button/Button";

function App() {
  return (
    <div className="App">
      <Button drink={"blue%20margarita"}/>
      <Button drink={"strawberry%20shivers"}/>
      {/* <Button drink={"blue%20lagoon"}/> */}
    </div>
  );
}

export default App;