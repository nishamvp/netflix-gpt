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
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&rel=0`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
