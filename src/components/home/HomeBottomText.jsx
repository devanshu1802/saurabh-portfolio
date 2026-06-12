import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex flex-col md:flex-row items-center justify-center gap-2 w-full px-4">
      <div className="lg:border-3 border-2 w-full md:w-auto justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center border-white px-3 py-2 lg:px-5 lg:pt-1.5 rounded-full uppercase">
        <Link className="text-[6vw] lg:text-[4vw] lg:mt-4" to="/work">
          Projects
        </Link>
      </div>
      <div className="lg:border-3 border-2 w-full md:w-auto justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center border-white px-3 py-2 lg:px-5 lg:pt-1.5 rounded-full uppercase">
        <Link className="text-[6vw] lg:text-[4vw] lg:mt-4" to="/agence">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
