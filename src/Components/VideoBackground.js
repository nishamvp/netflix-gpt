import { useSelector } from "react-redux";
import { useVideoBackground } from "../hooks/useVideoBackground";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.movieTrailer);

  useVideoBackground(movieId);

  return (
    <div className=" w-screen">
      <iframe
  
        allowFullScreen
        className="w-screen aspect-video pointer-events-none "
        src={`https://www.youtube-nocookie.com/embed/${trailer?.key}?rel=0&autoplay=1&loop=1&mute=1&controls=0&playlist=${trailer?.key}`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
