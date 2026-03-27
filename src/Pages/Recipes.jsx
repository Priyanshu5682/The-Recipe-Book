import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../component/RecipeCard";
const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return <div className="flex flex-wrap gap-10">{renderrecipes}</div>;
}

export default Recipes;
