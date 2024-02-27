import openai from "../utils/openai";

const useGetMovieSuggestions = () => {

  const getMovieSuggestionFromAI = async (query) => {
    const gptPrompt =
      "Act as a Movie Recommendation system and suggest some movies for the query:" +
      query +
      ". only give me names of 5 movies,comma seperated like the example result give ahead,Example Result:Gadar,Sholay,Don,Pk";
    return await openai.chat.completions.create({
      messages: [{ role: "user", content: gptPrompt }],
      model: "gpt-3.5-turbo",
    });
  };

  const parseMovieSuggestions = (completion) => {
    return completion?.choices?.[0].message?.content?.split(",") || [];
  };

  const getAndSetMovieSuggestions = async (query) => {
    const completion =await getMovieSuggestionFromAI(query);
    const suggestedMovies = await parseMovieSuggestions(completion);
    return suggestedMovies
  };
  return { getAndSetMovieSuggestions };
};

export default useGetMovieSuggestions;
