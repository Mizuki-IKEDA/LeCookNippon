/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export const findRecipe = (recipes, searchedSlug) => recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  
export function getTextByRecipesNumber(recipes = []) {
let text;
switch (recipes.length) {
    case 0:
    text = 'Discover our recipes soon !';
    break;
    case 1:
    text = 'Try our most delicious recipe.';
    break;
    default:
    text = 'Choose a recipe from our selection. ';
    break;
}
return text;
}
  