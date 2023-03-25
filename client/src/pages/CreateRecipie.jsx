import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserID } from "../hooks/getLocalUserID";
import { useCookies } from "react-cookie";

function CreateRecipie() {
  const userID = useGetUserID();
  const navigate = useNavigate();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    ingridients: [],
    instructions: "",
    image: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngridient = () => {
    setRecipe({ ...recipe, ingridients: [...recipe.ingridients, ""] });
  };

  const handleSingleIngridientChange = (e, idx) => {
    const { value } = e.target;
    const ingridients = recipe.ingridients;
    ingridients[idx] = value;
    setRecipe({ ...recipe, ingridients });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/recipes", recipe, {
        headers: { authorization: cookies.access_token },
      });
      navigate("/");
      alert("Recipe added!");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {!cookies.access_token ? (
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className=" text-5xl font-bold">
            Login first to create your first recipe in Chandak Cuisine!
          </h1>
          <Link
            className="mb-1 text-white bg-blue-700 rounded-lg hover:bg-blue-800 px-4 py-1 mt-10"
            to="/login"
          >
            Login
          </Link>
        </div>
      ) : (
        <div>
          <div className="bg-blue-200 min-h-screen flex items-center">
            <div className="w-full">
              <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
                Fill out our form
              </h2>
              <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                <form onSubmit={onSubmit}>
                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Put in your fullname."
                      className="border border-gray-300 shadow p-3 w-full rounded"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Ingridients
                    </label>
                    <div className="flex flex-col space-y-1">
                      {recipe.ingridients.map((ingridient, idx) => (
                        <input
                          type="text"
                          placeholder="add ingridient"
                          key={idx}
                          name="ingridients"
                          value={ingridient}
                          className="border border-gray-300 shadow p-2 rounded"
                          onChange={(e) => handleSingleIngridientChange(e, idx)}
                        ></input>
                      ))}
                      <button
                        className="bg-blue-500 text-white font-bold px-2 py-2 rounded-lg text-sm"
                        onClick={addIngridient}
                        type="button"
                      >
                        Add Ingridients
                      </button>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Instructions
                    </label>
                    <input
                      type="text"
                      id="instructions"
                      name="instructions"
                      placeholder="How to cook this!"
                      className="border border-red-300 shadow p-3 w-full rounded"
                      onChange={handleChange}
                    />
                  </div>
                  <label className="block mb-2 font-bold text-gray-600">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="https://example.com/image.png"
                    className="border border-red-300 shadow p-3 w-full rounded mb-5"
                    onChange={handleChange}
                  />
                  <label className="block mb-2 font-bold text-gray-600">
                    Cooking Time (in mins)
                  </label>
                  <input
                    type="text"
                    id="cookingtime"
                    name="cookingtime"
                    placeholder="3 mins⏱️"
                    className="border border-red-300 shadow p-3 w-full rounded mb-"
                    onChange={handleChange}
                  />

                  <button
                    className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg mt-7"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateRecipie;
