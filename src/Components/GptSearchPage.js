import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";
import GptSuggestions from "./GptSuggestions";

const GptSearchPage = () => {
  return (
    <div>
      <div className="h-screen fixed bg-black  -z-20">
        <img
          src={BG_IMG}
          alt="Background"
          className="opacity-40 w-screen h-screen object-cover"
        />
      </div>
      <GptSearchBar />
      <GptSuggestions/>
    </div>
  );
};

export default GptSearchPage;
