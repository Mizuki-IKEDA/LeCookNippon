/* eslint-disable arrow-body-style */
// == Import : npm
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findRecipe } from '../../selectors/recipes';

// == Import : local
// Composants
import Page from '../Page';
import AppHeader from '../AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
function Recipe() {
  const { slug } = useParams();
  const recipe = useSelector((state) => findRecipe(state.recipes.recipes, slug));

  if (!recipe) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

// == Export
export default Recipe;
