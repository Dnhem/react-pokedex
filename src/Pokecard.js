const Pokecard = props => {
  return (
    <div>
      <div>{props.name}</div>
      <img src={props.img} />
      <div>{props.type}</div>
      <div>{props.exp}</div>
    </div>
  );
};

export default Pokecard;
