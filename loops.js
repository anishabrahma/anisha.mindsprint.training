function Loops() {
    const array = [1, 2, 3, 4, 5, 6, 7];
    return (
      <>
        <ul>
          {array.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      
      </>
    );
  }
  