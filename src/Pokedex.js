import Pokecard from "./Pokecard";
import pokeList from "./pokeList";
import "./styles/Pokedex.css";
const pokeApi =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokedex = props => {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <div className="Pokedex-card">
        {pokeList.map(p => {
          return (
            <Pokecard
              name={p.name}
              img={`${pokeApi}${p.id}.png`}
              type={p.type}
              exp={p.base_experience}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
