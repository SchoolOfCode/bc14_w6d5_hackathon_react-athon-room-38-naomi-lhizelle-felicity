// Importing necessary components and modules.
import '../App/App.css';

// Defining a new component called "Container".
function Container({ data }) {
  // Checking if "data" exists.
  if (data) {
    // Using the spread operator and the Set data structure to create a new array called "uniqueData" that contains no duplicates of the elements in "data".
    const uniqueData = [...new Set(data)];

    // Rendering the "uniqueData" as a list, with each item as a list item.
    return (
      <div className="ingreds-list">
        <h2>Ingredients:</h2>
        <ul className="">
          {uniqueData.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <button className="order-button">Place Order</button>
      </div>
    );
  } else {
    // If "data" doesn't exist, render nothing.
    return null;
  }
}

// Exporting the Container component as the default export of this module.
export default Container;