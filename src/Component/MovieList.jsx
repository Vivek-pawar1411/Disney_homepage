import React, { useEffect, useState } from "react";
import GlobalApi from "../Service/GlobalApi";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreid, idx_ }) => {
  const [movielist, setmovielist] = useState([]);
  useEffect(() => {
    getmoviebygenreid();
  }, []);

  const getmoviebygenreid = () => {
    GlobalApi.getMovieByGenreId(genreid).then((response) => {
      console.log("movie", response.data.results);
      setmovielist(response.data.results);
    });
  };
  return (
    <div className="flex overflow-x-auto gap-[20px] no-scrollbar py-[16px] px-[10px]">
      {movielist.map((item) => (
        <>
         {idx_%3==0?<HrMovieCard movie={item}/> :<MovieCard movie={item}  />}
        </>
      ))}
    </div>
  );
};

export default MovieList;
