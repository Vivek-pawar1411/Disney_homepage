import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";


const HrMovieCard = ({movie}) => {
   return (
       <section className='hover:scale-110 transition-all duration-150 ease-in p-[15px]'>
        <img src={IMAGE_BASE_URL+movie.poster_path} alt="poster"  className='w-[200px] h-[150px] hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer hover:border-[3px] rounded-[5px]
            border-gray-400'/>
            <h4>{movie.title}</h4>
  </section>
  )
}

export default HrMovieCard