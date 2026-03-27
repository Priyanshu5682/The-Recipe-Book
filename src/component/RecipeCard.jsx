import { Link } from "react-router-dom"

const RecipeCard = (props) => {
    const { id, title, image, desc, chef } = props.recipe
    return (
      <Link to={`/recipes/details/${id}`} className="duration-100 hover:scale-105 w-[23vw] block p-4 border rounded-lg bg-white text-black mb-4">
        <img src={image} alt={title} className="w-[23vw] h-48 object-cover rounded" />
        <h1 className="text-xl font-bold mt-3">{title}</h1>
        <small className="text-sm text-gray-500">By {chef}</small>
        <p className="mt-2">{desc?.slice(0,100)}... <small className="text-blue-400">More</small></p>
      </Link>
    )
}

export default RecipeCard
