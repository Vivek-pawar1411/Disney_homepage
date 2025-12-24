import React from 'react'
import genereList from '../Constant/GenreList'
import MovieList from './MovieList'

const GenreListbymovie = () => {
  return (
    <div>
         {genereList.genere.map((item ,idx)=>idx<=7&&(
            <div className='p-[30px] px-[32px]'>
                <h2 className='text-[18px] text-white font-bold'> {item.name}</h2>
                <MovieList genreid={item.id} idx_={idx}/>
            </div>
         ))}

    </div>
  )
}

export default GenreListbymovie