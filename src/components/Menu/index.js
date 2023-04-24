import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.scss';

import { selectRecipes } from '../../redux/reducer/recipeReducer';

function Menu() {
    const isLogged = useSelector((state) => state.users.logged);
    const checkIsActive = ({ isActive }) => isActive ? 'menu-link menu-link--active' : 'menu-link';
    const recipes = useSelector(selectRecipes);
    
    return (
    <nav className="menu" >
        <NavLink
            to="/"
            className={ checkIsActive }
        >
            Home
        </NavLink>
        {isLogged && 
        <NavLink
          to="/fav"
          className={checkIsActive}
        >
          Favorite recipes
        </NavLink>
        }
        {recipes.map((recipe) => (
            <NavLink
            key={recipe.id}
            to={`/recipe/${recipe.slug}`}
            className={checkIsActive}
            >
            {recipe.title}
            </NavLink>
        ))}
    </nav>
    )
};

export default Menu;