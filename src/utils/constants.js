export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";
  
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/5cc9ec21-d7a5-4a49-ab1d-c9b5ab1b124f/AE-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const TMDB_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGM1ZTUxNzM4NzE3ODJkOWFjMGI1MjRiOTVjZTAyNSIsInN1YiI6IjYzZWNlZTMzOGU4NzAyMDA4MjNiNmM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujKovk8MGWzUR9zajUcmoLSW44DWa114tQmdKsjJZIc";

export const POSTER_URL = "https://image.tmdb.org/t/p/w500/";

export const OPENAI_API_KEY =process.env.REACT_APP_OPENAI_API_KEY

export const multiLingual = [
  { identifier: "en", name: "English" },
  { identifier: "ml", name: "Malayalam" },
  { identifier: "hi", name: "Hindi" },
];
