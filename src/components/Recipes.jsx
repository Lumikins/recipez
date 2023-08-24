import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchRecipes } from "../utils";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("cake");
  const [limit, setLimit] = useState(9);
  const [loading, setLoading] = useState(false);

  // get user search input to be used in the API call
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // fetch recipe using the search parameter when the search button is clicked
  const handleSearch = async (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ search, limit });
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const showMore = () => {
    setLimit((prev) => prev + 9);
    fetchRecipe();
  };

  useEffect(() => {
    setLoading(true);
    fetchRecipe();
  }, []);

  if (loading) {
    return <h1 className="text-3xl text-white">Loading....</h1>;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full md:w-[800px] pt-10 pb-5 px-0 md:px-10">
        <form className="w-full" onSubmit={handleSearch}>
          <SearchBar
            placeholder="Cake, Pasta, Vegan etc."
            handleInput={handleInput}
            icon={<BsSearch className="text-white md:text-xl" />}
          />
        </form>
      </div>
      <div className="py-5 mt-20 mb-5">
        <h1 className="text-white text-2xl md:text-5xl text-center font-bold capitalize">
          here are some recipez to get you started
        </h1>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full grid grid-cols-none md:grid-cols-3 gap-10 px-0 lg:px-10 py-10">
            {recipes?.map((recipe, index) => (
              <RecipeCard recipe={recipe} key={index} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full py-10">
            <button
              className="bg-green-800 text-white px-3 py-2 rounded-full"
              onClick={showMore}
            >
              Show more
            </button>
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center justify-center py10">
          <p className="text-center">No recipes found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
