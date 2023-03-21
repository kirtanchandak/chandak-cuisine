function CreateRecipie() {
  return (
    <div class="bg-blue-200 min-h-screen flex items-center">
      <div class="w-full">
        <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
          Fill out our form
        </h2>
        <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form action="">
            <div class="mb-5">
              <label for="name" className="block mb-2 font-bold text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Put in your fullname."
                class="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="block mb-2 font-bold text-gray-600">
                Ingridients
              </label>
            </div>

            <div class="mb-5">
              <label for="twitter" class="block mb-2 font-bold text-gray-600">
                Instructions
              </label>
              <input
                type="text"
                id="instructions"
                name="instructions"
                placeholder="How to cook this!"
                class="border border-red-300 shadow p-3 w-full rounded"
              />
            </div>
            <label for="twitter" class="block mb-2 font-bold text-gray-600">
              Image URL
            </label>
            <input
              type="text"
              id="imageurl"
              name="imageurl"
              placeholder="https://example.com/image.png"
              class="border border-red-300 shadow p-3 w-full rounded mb-5"
            />
            <label for="twitter" class="block mb-2 font-bold text-gray-600">
              Cooking Time (in mins)
            </label>
            <input
              type="text"
              id="cookingtime"
              name="cookingtime"
              placeholder="3 mins⏱️"
              class="border border-red-300 shadow p-3 w-full rounded mb-"
            />

            <button
              class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg mt-7"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipie;
