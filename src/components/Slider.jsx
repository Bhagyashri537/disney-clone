import React, { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const ImgUrl = 'https://image.tmdb.org/t/p/w500';
const screenWidth=window.innerWidth;

const Slider = () => {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const api_key = '5c7f9652dd3c716cbbbd9e61788909b2'; // Your API key
    const url = 'https://api.themoviedb.org/3/trending/all/day';
    

    try {
      const response = await fetch(`${url}?api_key=${api_key}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.results); // See the entire response structure in console

      // Assuming 'results' contains an array of movies or items you want to display
      if (data.results) {
        setMovies(data.results);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const sliderRight = (element) => {
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft = (element) => {
    element.scrollLeft-=screenWidth-110
  }

  return (
     <div>
      <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)}  className='hidden md:block scroll-smooth text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'/>
      <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className='hidden md:block scroll-smooth text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'/>
      <div ref={elementRef} className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none">
        {movies.map(movie => (
          
            <img src={ImgUrl+movie.backdrop_path} className='min-w-full md:h-[310px]  object-cover object-left-top mr-5 hover:border-2 border-gray-300 rounded-md transition-all duration-100 ease-in-out'/>
           
            
           
         
        ))}
      </div>
      </div>
    
  );
};

export default Slider;
