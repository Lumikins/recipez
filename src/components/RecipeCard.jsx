import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { image, label, cuisineType, mealType, uri } =
    recipe?.recipe;

  const id = uri?.split("#")[1];

  return (
    <Link to={`/recipes/${id}`} className="w-full">
      <div className="customGradient customShadow w-full rounded-lg group">
        <img
          src={image}
          alt={label}
          className="rounded-lg h-[200px] w-full object-cover group-hover:opacity-70"
          loading="lazy"
        />
        <div className="p-3 flex flex-col">
          <p className="text-white md:text-xl font-semibold line-clamp-1">
            {label}
          </p>
          <div className="mt-3 flex">
            <span className="px-2 py-1 text-sm capitalize bg-white/20 shadow-xl font-semibold rounded-full mr-3 text-green-500">
              {cuisineType}
            </span>
            <span className="px-2 py-1 text-sm capitalize bg-white/20 shadow-xl font-semibold rounded-full text-green-500">
              {mealType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
