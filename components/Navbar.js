import React from "react";
import FavoriteContext from "../contexts/favoritesContext";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl =
    "https://w7.pngwing.com/pngs/531/918/png-transparent-pokemon-logo-pokemon-nintendo-logo-thumbnail.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div>
        <i className="fas fa-heart"></i> {favoritePokemons.length}
      </div>
    </nav>
  );
};

export default Navbar;
