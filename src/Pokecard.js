import "./styles/Pokecard.css";

const Pokecard = props => {
  return (
    <div className="Pokecard-card">
      <div>{props.name}</div>
      <img src={props.img} />
      <div>Type: {props.type}</div>
      <div>Exp: {props.exp}</div>
    </div>
  );
};

export default Pokecard;
