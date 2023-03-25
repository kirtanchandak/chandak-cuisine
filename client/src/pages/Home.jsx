import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useGetUserID } from "../hooks/getLocalUserID";

function Home() {
  const userID = useGetUserID();
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/recipes");
        setRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:5000/recipes", {
        recipeID,
        userID,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="text-center py-6 font-bold text-5xl font-mono">Recipes</h1>
      <div className="flex items-center justify-center">
        <ul className="flex flex-col space-y-10">
          {recipes.map((recipe) => (
            <li key={recipe._id} className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={recipe.image} alt="" />
                </a>
                <div className="p-5">
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {recipe.name}
                    </h5>
                    <button
                      className="mb-1 text-white bg-blue-700 rounded-lg hover:bg-blue-800 px-2"
                      onClick={() => saveRecipe(recipe._id)}
                    >
                      Save🔖
                    </button>
                  </div>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {recipe.instructions}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {recipe.ingridients}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
