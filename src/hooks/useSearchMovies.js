import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";

export const useSearchMovies = () => {
  const [isLoading, setIsLoading] = useState(false);

  const searchTmdb = async (movie) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
        API_OPTIONS
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { searchTmdb, isLoading };
};
