function Child(props) {
  const changeColorHandler = () => {
    props.changeTextColor();
  };

  return <button onClick={changeColorHandler}>Toggle color</button>;
}

export default Child;
