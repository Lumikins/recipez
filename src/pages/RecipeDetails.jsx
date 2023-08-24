import React, { useEffect, useState } from "react";
import { PiNotePencil, PiSealCheck } from "react-icons/pi";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipe, fetchRecipes } from "../utils/index";

const RecipeDetails = () => {
  // set states
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

  // get the recipe id from the url
  const { id } = useParams();

  // fetch recipe data using the params id
  const getRecipe = async (id) => {
    try {
      setLoading(true);
      const data = await fetchRecipe(id);
      setRecipe(data);
      const recommended = await fetchRecipes({
        search: recipe?.dishType,
        limit: 6,
      });
      setRecipes(recommended);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-3xl text-white">Fetching recipe....</h1>;
      </div>
    );
  }

  return (
    <div className="w-full">
      <Header title={recipe?.label} image={recipe?.image} url={recipe?.url} type={"recipeDetails"} />
      <div className="w-full px-4 lg:px-20 pt-5">
        <div className="flex gap-10 items-center justify-center px-4">
          <div className="flex flex-col justify-between items-center">
            <span className="text-white text-center bg-slate-700 border w-full py-1 rounded-lg mb-2">
              {recipe?.totalTime} min.
            </span>
            <p className="text-white text-sm">Cooking Time</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <span className="text-white text-center bg-slate-700 border w-full py-1 rounded-lg mb-2">
              {recipe?.yield}
            </span>
            <p className="text-white text-sm">Servings</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <span className="text-white text-center bg-slate-700 border w-full py-1 rounded-lg mb-2">
              {recipe?.calories.toFixed(0)}
            </span>
            <p className="text-white text-sm">Calories</p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 py-20 px-4 md:px-10">
          {/* left side */}
          <div className="w-full md:w-1/2 md:border-r border-green-500 pr-1">
            <div className="flex flex-col gap-5">
              <p className="text-green-500 text-2xl font-semibold underline">
                Ingredients
              </p>
              {recipe?.ingredientLines?.map((ingredient, i) => (
                <p
                  key={i}
                  className="text-white flex items-center text-sm md:text-base gap-2"
                >
                  <PiNotePencil className="text-green-500" size={20} />
                  {ingredient}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-5 mt-20 md:pr-2">
              <p className="text-green-500 underline text-2xl font-semibold">
                Labels
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {recipe?.healthLabels.map((label, i) => (
                  <p
                    key={i}
                    className="flex items-center text-white gap-2 bg-slate-700 border px-2 py-1 rounded-full font-semibold"
                  >
                    <PiSealCheck className="text-green-500" size={20} />
                    {label}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* right side */}
          <p className="w-full md:w-1/2 2xl:pl-10 mt-20 md:mt-0">
            {recipes?.length > 0 && (
              <>
                <p className="capitalize text-white text-2xl mb-10">
                  you might also like these recipez
                </p>
                <div className="grid md:grid-cols-2 gap-6 px-1 pt-3">
                  {recipes?.map((recipe, i) => (
                    <RecipeCard recipe={recipe} key={i} />
                  ))}
                </div>
              </>
            )}
            {/* <div className="flex flex-col gap-5">
              <p className="text-green-500 text-2xl underline">Instructions</p>
              <p className="text-white flex gap-2 text-justify">
                {recipe?.instructions}
              </p>
            </div> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
