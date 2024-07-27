import React from 'react'
// import allData from './dummydata'
import Star from './Star'
import { useNavigate } from 'react-router-dom'
function Productcard({product,pageno}) {
  const navigate = useNavigate();
  return (
    <div className='h-[280px] w-[200px] flex flex-col space-y-[2px]  '>
    <img onClick={()=>navigate(`${product.id}?pageno=${pageno}`)} src={product.thumbnail} alt=""  className='h-[70%]  w-full object-cover object-center cursor-pointer'/>
    <h1 className='text-gray-400 text-sm'>{product.category}</h1>
    <h1 className='text-sm font-semibold'>{product.title}</h1>
    

    <Star styles={{height:14, width:14}}/>
    <div className='text-xs font-semibold'>${product.price}</div>

  
    </div>
  )
}

export default Productcard