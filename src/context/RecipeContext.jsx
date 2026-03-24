import { createContext, useState } from "react"
export const recipeconstext = createContext(null)
const RecipeContext = (props) => {
    const [data, setdata] = useState([])
  return (
    <recipeconstext.Provider value={{data, setdata}}>
    {props.children}
    </recipeconstext.Provider>
  )
}

export default RecipeContext
