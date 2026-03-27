import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipes'
import About from '../Pages/About'
import Create from '../Pages/Create'
import SingleRecipe from '../Pages/SingleRecipe'
const Mainroutes = () => {
  return (
    <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/details/:id' element={<SingleRecipe/>}/>
        <Route path='/create-recipe' element={<Create />}/>
        <Route path='/about' element={<About/>}/>
    </Routes >
  )
}

export default Mainroutes
