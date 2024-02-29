import InfoIcon from "../Icons/InfoIcon";
import PlayIcon from "../Icons/PlayIcon";
const VideoTitle = ({ title, overview }) => {
  return (
   
      <div className="absolute pl-[6%] pt-[20%] text-white  bg-gradient-to-r from-black  w-screen aspect-video">
        <h1 className=" md:text-3xl font-bold opacity-65">{title}</h1>
        <p className="hidden md:block w-1/3 text-lg font-semibold opacity-60">{overview}</p>
        <div className="flex gap-3 mt-5 opacity-80">
          <div className="flex items-center justify-center px-4 md:px-10 text-xs md:text-lg text-black bg-white py-2 rounded-md gap-1 ">
            <PlayIcon  />
            <button className="text-md font-bold">Play</button>
          </div>
          <div className="hidden  md:flex items-center justify-center px-10 bg-gray-700 py-2 rounded-md gap-1 ">
            <InfoIcon />
            <button className=" text-md font-bold">More Info</button>
          </div>
        </div>
      </div>
 
  );
};

export default VideoTitle;
