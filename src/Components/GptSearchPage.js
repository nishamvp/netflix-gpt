import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";
import GptSuggestions from "./GptSuggestions";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed bg-black  -z-20">
        <img
          src={BG_IMG}
          alt="Background"
          className="opacity-40 w-full h-full bg-cover"
        />
      </div>
      <GptSearchBar />
      <GptSuggestions/>
    </div>
  );
};

export default GptSearchPage;
