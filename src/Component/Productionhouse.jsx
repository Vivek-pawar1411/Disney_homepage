import React from 'react'
import disney from '../assets/Image/disney.png'
import marvel from '../assets/Image/marvel.png'
import national from '../assets/Image/nationalG.png'
import pixar from '../assets/Image/pixar.png'
import starwars from '../assets/Image/starwar.png'

import marvelv from '../assets/Video/marvel.mp4'
import starwarv from '../assets/Video/star-wars.mp4'
import disneyev from '../assets/Video/disney.mp4'
import pixarv from '../assets/Video/pixar.mp4'
import nationalv from '../assets/Video/national-geographic.mp4'

const  Productionhouse = () => {
   const productionhouselist =[
    {
        id:1,
        img:disney,
        video:disneyev
    },
    {
        id:2,
        img:marvel,
        video:marvelv
    },
    { 
        id:3,
        img:national,
        video:nationalv 
    },
    {
        id:4,
        img:pixar,
        video:pixarv
    },
    {
        id:5,
        img:starwars,
        video:starwarv
    }   
   ]

  return (
    <div className=' flex  gap-[24px]  mt-[20px] justify-evenly '>
      {productionhouselist.map((item) => (
  <div className=' w-[200px] border-[2px] border-gray-600
            rounded-[10px] hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative 
            '>
          <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  w-full top-0 rounded-[10px]
            opacity-0 hover:opacity-50 ' />
           <img src={item.img} alt="channel_image"className='w-full z-[1] opacity-100'  />

        </div>
      ))}
    </div>
  );
};


export default  Productionhouse;