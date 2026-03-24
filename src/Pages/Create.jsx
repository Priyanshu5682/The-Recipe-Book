import {useForm} from 'react-hook-form'
import { nanoid } from 'nanoid'
const Create = () => {
  const { register, handleSubmit } = useForm()
  const SubmitHandler = (data) => {
    data.id = nanoid()
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input 
      className='block border-b outline-0 p-2'
      {...register('image')} type="url"
      placeholder='Enter image url'/>
      <small className='text-red-400 text-lg'>This is how the error is shown</small>
      <input
      className='block border-b outline-0 p-2'
      {...register('title')} type="text" placeholder='Recipe Title'/>
      <input
      className='block border-b outline-0 p-2'
      {...register('chef')} type="text" placeholder='Chef Name'/>
      <small className='text-red-400 text-lg'>This is how the error is shown</small>
      <textarea
      className='block border-b outline-0 p-2'
      {...register('description')} placeholder='Recipe Description'></textarea>
      <small className='text-red-400 text-lg'>This is how the error is shown</small>
      <textarea
      className='block border-b outline-0 p-2'
      {...register('ingredients')} placeholder='Recipe Ingredients'></textarea>
      <select
      className='block border-b outline-0 p-2'
      {...register('categories')} >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>
      <small className='text-red-400 text-lg'>This is how the error is shown</small>
      <button className='mt-5 block bg-gray-900 text-white px-4 py-2 rounded'>Save Recipe</button>
    </form>
  )
}

export default Create
