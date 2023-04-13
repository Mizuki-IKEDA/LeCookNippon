import { useSelector } from 'react-redux';

import Page from "../Page";
import AppHeader from '../AppHeader';
import Content from "../Content";
import { getTextByRecipesNumber } from "../../selectors/recipes";

function Home() {
    const recipes = useSelector((state) => state.recipes.recipes);
    console.log(recipes);
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