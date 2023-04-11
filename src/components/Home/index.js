// import { useSelector } from 'react-redux';

import Page from "../Page";
import AppHeader from '../AppHeader';
import Content from "../Content";
import { getTextByRecipesNumber } from "../../selectors/recipes";

import data from '../../data';

function Home() {
//   const recipes = useSelector((state) => state.recipes.list);
    const recipes = data;
    const text = getTextByRecipesNumber(recipes);

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