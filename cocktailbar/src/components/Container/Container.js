import '../App/App.css';

function Container({ data }) {
    if (data) {
      const uniqueData = [...new Set(data)]; // Remove duplicates using Set
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
      return null;
    }
  }
  
  export default Container;
  