import { useContext } from "react"
import { useParams } from "react-router-dom"
import { recipecontext } from "../context/RecipeContext"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const { id } = useParams()
  const recipe = data.find((recipe) => recipe.id === Number(id))
  const { register, handleSubmit, reset } = useForm({defaultValues: {
      image: recipe.image,  
      title: recipe.title,
      chef: recipe.chef,
      desc: recipe.desc,
      ingr: recipe.ingr,
      categories: recipe.categories 
  }
});
  const navigate = useNavigate();
  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => recipe.id === Number(id)) 
    const copydata = [...data]
    copydata[index] = {...copydata[index], ...recipe}
    setdata(copydata)
    toast.success("Recipe updated successfully");
    
  };
  
  const deleteHandler = () => {
    const filtereddata = data.filter((recipe) => recipe.id !== Number(id))
    setdata(filtereddata)
    toast.success("Recipe deleted successfully");
    navigate("/recipes");
  }
  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt={recipe.title} />
        <h1 className="text-2xl font-bold">by {recipe.chef}</h1>
      </div>
      <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
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
      <button className="mt-5 block bg-blue-900 text-white px-4 py-2 rounded">
        Update Recipe
      </button>
      <button onClick={deleteHandler} className="mt-5 block bg-red-900 text-white px-4 py-2 rounded">
        Delete Recipe
      </button>
    </form>
    </div>
  ) : (
    <p>Loading...</p>
  )
}

export default SingleRecipe
