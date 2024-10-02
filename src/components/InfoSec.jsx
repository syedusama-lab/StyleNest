import React from 'react'
import { FaHeadset, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaLock, FaMoneyBill1Wave } from 'react-icons/fa6'

const InfoSec = () => {
    const infoItems = [
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:"Free Shipping",
            desc:"Get your orders delivered with no extra cost"
        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'/>,
            title:"Support 24/7",
            desc:"We arehere to assist you anytime"
        },
        {
            icon:<FaMoneyBill1Wave className='text-3xl text-red-600'/>,
            title:"100% Money Back",
            desc:"Full refund if yo are not satisfied"
        },
        {
            icon:<FaTag className='text-3xl text-red-600'/>,
            title:"Payment Secure",
            desc:"Yor payment information is safe with us"
        },
        {
            icon:<FaLock className='text-3xl text-red-600'/>,
            title:"Discount",
            desc:"Enjoy the best prices in our products"
        }
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {
                infoItems.map((items,index)=>{
                    return <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg
                    shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                        {items.icon}
                        <h3 className='mt-4 text-xl font-semibold'>{items.title}</h3>
                        <p className='mt-2 text-gray-600'>{items.desc}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default InfoSec