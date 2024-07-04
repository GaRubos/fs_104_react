function Button() {
  //   const handleClick = () => {
  //     alert("I'm a button!");
  //   };
  //   return <button onClick={handleClick}>Click me!</button>;
  // или такой вариант
  //   return <button onClick={() => alert("I'm a button!")}>Click me!</button>;

  const handleClick = (evt) => {
    console.log(evt);
  };

  return (
    <>
      <button onClick={handleClick}>First button</button>
      <button onClick={(evt) => console.log(evt)}>Second button</button>
    </>
  );
}

export default Button;
