import React, { useEffect, useState } from 'react';

const ImgUrl = 'https://image.tmdb.org/t/p/w500'

const Slider = () => {
  const [movies, setMovies] = useState([]);
 

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

  return (
    
      <div className="flex overflow-x-auto w-full px-16 py-4">
        {movies.map(movie => (
          
            <img src={ImgUrl+movie.backdrop_path} className='min-w-full h-[310px]  object-contain object-left-top mr-5'/>
           
            
           
         
        ))}
      </div>
    
  );
};

export default Slider;
