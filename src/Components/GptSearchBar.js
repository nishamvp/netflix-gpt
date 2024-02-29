import React from "react";
import languageConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useSearchMovies } from "../hooks/useSearchMovies";
import useGetMovieSuggestions from "../hooks/useGetMovieSuggestions";
import { addSearchedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useRef();
  const lang = useSelector((store) => store.config.lang);
  const { getAndSetMovieSuggestions } = useGetMovieSuggestions();
  const { searchTmdb, isLoading } = useSearchMovies();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const suggestedMovies = await getAndSetMovieSuggestions(
      searchValue.current.value
    );
    const promiseArray = suggestedMovies?.map((movie) => searchTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addSearchedMovies({
        searchMovieResults: tmdbResults,
        movieNames: suggestedMovies,
      })
    );
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="pt-[28%] md:pt-[10%] flex justify-center">
          <form
            className=" md:w-1/2 bg-black grid grid-cols-12 p-2 md:p-3"
            onSubmit={handleSubmit}
          >
            <input
              ref={searchValue}
              className="rounded-lg p-1 md:p-3 mr-4 col-span-8 placeholder:text-xs md:placeholder:text-lg"
              type="text"
              placeholder={languageConstants[lang].placeholder}
            />
            <button className=" text-xs md:text-lg col-span-4 bg-red-600 font-bold text-white rounded-lg">
              {languageConstants[lang].search}
            </button>
          </form>
        </div>
      )}
    </div>
  );

};

export default GptSearchBar;
