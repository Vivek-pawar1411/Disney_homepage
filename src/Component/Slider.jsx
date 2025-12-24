import React,{useEffect,useState,useRef} from 'react'
import GlobalApi from '../Service/GlobalApi'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";


const Slider = () => {
    const [movieList, setMovieList] =useState([]);
        const elementRef=useRef();
    useEffect(() => {
        gettrendingMovies();
    },[])

        const gettrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
            let comb=IMAGE_BASE_URL + resp.data.results[1].backdrop_path;
            console.log("comb",comb);
        })
    }
 const sliderRight = () => {
  elementRef.current.scrollBy({
    left: elementRef.current.clientWidth,
    behavior: "smooth",
  });
};

  const sliderLeft = () => {
  elementRef.current.scrollBy({
    left: -elementRef.current.clientWidth,
    behavior: "smooth",
  });
};

 
      
  return (
    <div className="relative ">
           <HiChevronLeft
      className="text-white text-[30px] absolute left-[30px] top-[47%] -translate-y-[47%]cursor-pointer" onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight
      className="text-white text-[30px] absolute right-[30px] top-[47%] -translate-y-[47%] cursor-pointer" onClick={()=>sliderRight(elementRef.current)}/>

   
    <div className='flex overflow-x-auto  px-[25px] py-[25px]
    no-scrollbar scroll-smooth gap-[50px]' ref={elementRef}> 
        {movieList.map((item)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full h-[50vh] object-cover
            object-left-top mr-5 rounded-[10px] hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in'/>
        ))}
    </div>
    </div>
  )
}


export default Slider