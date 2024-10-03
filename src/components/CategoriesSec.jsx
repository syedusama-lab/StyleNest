import React from 'react'

const CategoriesSec = () => {
  const cetegory = [
    {
      title:"mens",
      url:"/assets/images/mens.jpg"
    },
    {
      title:"women",
      url:"/assets/images/women.jpg"
    },
    {
      title:"Kids",
      url:"/assets/images/kids.jpg"
    },
  ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
      {cetegory.map((item,index)=>{
        return <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={item.url} alt="" className='w-full h-full object-cover rounded-lg shadow-md' />
          <div className='absolute top-20 left-12'>
            <p className='text-xl font-bold'>{item.title}</p>
            <p className='text-gray-100'>View All</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default CategoriesSec