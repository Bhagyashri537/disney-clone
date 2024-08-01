import React, { useEffect, useState, useRef } from 'react'
import GolbalAPI from '../Services/GolbalAPI'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

//const screenWidth=window.innerWidth;

function MovieList({genereId}) {

  const [movieList, setMovieList] = useState([])
  const elementRef = useRef(null);

     useEffect(() => {
        getMovieByGenereId()
     },[])

    const getMovieByGenereId = () => {
      GolbalAPI.getMovieByGenreId(genereId).then(res=>{
        //console.log(res.data.results)
        setMovieList(res.data.results)
      })
    }
    const sliderRight = (element) => {
        element.scrollLeft+=500
      }
      const sliderLeft = (element) => {
        element.scrollLeft-=500
      }
  return (
    <div className='relative'>
        <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)}  className='hidden md:block scroll-smooth text-white text-[30px] absolute left-0 p-2 z-10 mx-8 mt-[150px] cursor-pointer'/>
     
    <div ref={elementRef} className='flex overflow-x-auto scrollbar-none gap-8 pt-5 px-3 pb-3'>
   {movieList.map((item,index) => (
    <MovieCard movie={item}/>
   ))}
    </div>
    <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className='hidden md:block scroll-smooth text-white text-[30px] p-2 z-10 absolute right-0 mx-8 mt-[150px] cursor-pointer '/>
    </div>
  )
}

export default MovieList