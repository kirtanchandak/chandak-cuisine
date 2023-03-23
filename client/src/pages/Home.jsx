import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [recipes, setRecipes] = useState([]);
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
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <div key={recipe._id} className="flex justify-center items-center">
            <div className="w-96 bg-slate-200">
              <h2>{recipe.name}</h2>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
