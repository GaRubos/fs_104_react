const Counter = () => {
  const handleClick = () => {
    console.log(Date.now());
  };

  const handleMinusClick = (name) => {
    console.log(`${Date.now()} - Ruslan`);
  };

  const resetClick = (e) => {
    console.log(e);
    e.target.innerHTML = "hello";
  };

  return (
    <div>
      <div>
        <h1>{1}</h1>
        <div>
          <button onClick={() => handleMinusClick("ruslan")}>minus</button>
          <button onClick={resetClick}>reset</button>
          <button onClick={handleClick}>plus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
