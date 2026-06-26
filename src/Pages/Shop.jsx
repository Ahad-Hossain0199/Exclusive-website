import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import keyboard from '../assets/keyboard.png';
import Breadcrum from '../Components/Breadcrum';

const Shop = () => {

  const [allproducts, setAllproducts] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => setAllproducts(data.products));
  },[])



  return (
    <div className='py-20'>
      <div className="container">
        <Breadcrum/>
        <div className='flex justify-between mt-12.5'>
          <h2 className='text-lg font-bold'>Shop by Category</h2>
          <div className='space-x-3'>
            <span>show :</span>
            <select name="" id="" className='border border-[#D9D9D9] px-11.25 py-1 rounded-4'>
              <option value="">6</option>
               <option value="">9</option>
                <option value="">12</option>
            </select>
          </div>
        </div>
        <div className='flex justify-between mt-7.5'>
          <div className='w-[20%]'>
            <ul >
              <li >Woman’s Fashion </li>
              <li >Men’s Fashion </li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className='w-[80%]'>
            <div className='flex justify-between flex-wrap'>

           {
              allproducts.map((item) => (
                <Card
                 
                  image={item.thumbnail}
                  title={item.title}
                  currentPrice={item.price}
                  previousPrice={(item.price / (1 - item.price / 100)).toFixed(2)}
                  review={item.reviews.lenght}
                  discount={item.discountPercentage}
                />
              ))
           }

           </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
