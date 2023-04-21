function Container({ data }) {
    if (data) {
      const uniqueData = [...new Set(data)]; // Remove duplicates using Set
      return (
        <ul>
          {uniqueData.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      );
    } else {
      return null;
    }
  }
  
  export default Container;
  