import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";


const MovieCard = ({movie,idx}) => {
  return (
    <>
        <img src={IMAGE_BASE_URL+movie.poster_path} alt="poster"  className='w-[170px] hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer hover:border-[3px] rounded-[5px]
            border-gray-400'/>
    </>
  )
}

export default MovieCard 