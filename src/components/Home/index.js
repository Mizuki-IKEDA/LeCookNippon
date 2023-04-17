import { useDispatch, useSelector } from 'react-redux';

import Page from "../Page";
import AppHeader from '../AppHeader';
import Content from "../Content";
import { getTextByRecipesNumber } from "../../selectors/recipes";
import { fetchRecipes, getRecipesStatus, selectRecipes } from '../../redux/reducer/recipeReducer';
import { useEffect } from 'react';

function Home() {
    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipes);
    const text = getTextByRecipesNumber(recipes);
    
    const recipesStatus = useSelector(getRecipesStatus);
  
    useEffect(() => {
      if (recipesStatus === 'idle') {
        dispatch(fetchRecipes())
      }
    }, [recipesStatus, dispatch]);
    
    console.log(recipes);
    return (
        <Page>
            <AppHeader />
            <Content
                title="TheNipponCook recipes"
                text={text}
                recipes={recipes}
            />
        </Page>
    );
}

export default Home;