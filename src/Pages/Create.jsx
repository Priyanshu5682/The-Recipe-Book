import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata);
    localStorage.setItem('recipe',JSON.stringify(copydata))

    toast.success("Recipe created successfully");
    reset();
    navigate("/recipes");
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter image url"
      />
      <small className="text-red-400 text-lg">
        This is how the error is shown
      </small>
      <input
        className="block border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />
      <input
        className="block border-b outline-0 p-2"
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
      />
      <small className="text-red-400 text-lg">
        This is how the error is shown
      </small>
      <textarea
        className="block border-b outline-0 p-2"
        {...register("desc")}
        placeholder="Recipe Description"
      ></textarea>
      <small className="text-red-400 text-lg">
        This is how the error is shown
      </small>
      <textarea
        className="block border-b outline-0 p-2"
        {...register("ingr")}
        placeholder="Recipe Ingredients"
      ></textarea>
      <select
        className="block border-b outline-0 p-2"
        {...register("categories")}
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>
      <small className="text-red-400 text-lg">
        This is how the error is shown
      </small>
      <button className="mt-5 block bg-gray-900 text-white px-4 py-2 rounded">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
