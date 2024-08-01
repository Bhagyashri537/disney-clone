import React from 'react'

const ImgUrl = 'https://image.tmdb.org/t/p/w500';

function MovieCard({movie}) {
  return (
    <>
        <img src={ImgUrl+movie.poster_path} className='w-[110px] md:[200px] rounded-lg hover:border-2 border-gray-200 hover:scale-110 cursor-pointer transition-all duration-150 ease-in ' />
    </>
  )
}

export default MovieCard