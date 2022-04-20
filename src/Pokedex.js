import Pokecard from "./Pokecard";
import pokeList from "./pokeList";
const pokeApi =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokedex = props => {
  return (
    <div class="Pokedex">
      <h1>Pokedex</h1>
      <div class="Pokedex-cards">
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
