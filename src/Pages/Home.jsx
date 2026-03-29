// import axios from 'axios'
// const Home = () => {
//   const getproduct = async () => {
//     try {
//       const {data} = await axios.get('https://fakestoreapi.com/products')    //{data} means data is destructured here,we can put response as an variable but then response.data should be used 
//       console.log(data);
//     } catch (error) {
//       console.log('error');
      
//     }
//   }
//   // const strdata = await fetch('https://fakestoreapi.com/products/1')
//   // const jsondata = strdata.json()
//   // console.log(jsondata);
  
//   return (
//     <div>
//       <h1>Home</h1>
//       <button onClick={getproduct}>Get Products</button>
//     </div>
//   )
// }

// export default Home


import { useEffect } from 'react';
import axios from '../utils/axios'
const Home = () => {
  const getproduct = async () => {
    try {
      const {data} = await axios.get('/products')
      console.log(data);
      
    } catch (error) {
      console.log('Error occured');
      
    }
  }
  useEffect(()=>{
    console.log('component mounted');
    getproduct()
    return () => {
      console.log('component unmounted');
      
    }
  })
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}>Get product
      </button>
    </div>
  )
}

export default Home

