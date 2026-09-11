import ProfileImg from "../assets/profilehd.png";
import avatarimg from "../assets/avatar.png"
import { ArrowUpRight } from "lucide-react";
const Hero = () => {
  return (
    <div className="relative flex items-center mt-33">

      {/* Faded name behind */}
      <h1 className="absolute bottom-100 left-35 z-0 text-[180px] font-black text-white/10">
        ARIF ASLAM
      </h1>

      {/* Left name */}
      <div className="relative z-10 mr-10 mt-114">
        <h1
          className="font-bold text-white/20 text-7xl ml-8.5
          [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
        >
          ARIF.A
        </h1>
      </div>

      {/* Profile image */}
      <div className="relative z-10">
        <img
          className="h-130 ml-60 object-contain
          [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          src={ProfileImg}
          alt="Arif A"
        />
      </div>

      {/* Description - right top corner */}
      <div className="absolute top-15 left-20 w-64 z-20">
        <p className="text-white text-lg font-medium leading-relaxed">
          I’m a passionate <span className="text-black font-bold text-xl">MERN</span> Stack Developer focused on building modern,
          responsive, and <br /> user-friendly web applications.
        </p>
      </div>
<div className="absolute right-20 bottom-12 w-80 h-21 bg-black flex rounded-lg">

  <div>
    <img
      className="w-20 p-2.5 rounded-full"
      src={avatarimg}
      alt="Arif"
    />
  </div>

  <div className="text-white flex flex-col gap-1.5 text-[14px] pt-0.5 pb-0.5">
    <p className="text-white/40">Let's Talk</p>

    <div>
      <p className="text-[20px]">Arif</p>
      <p className="text-white/40">Mern Developer</p>
    </div>
  </div>

  {/* Contact shortcut */}
<button
  className="ml-auto mr-3 my-auto flex items-center justify-center
             w-10 h-10 rounded-full bg-orange-400
             hover:bg-white hover:text-black
             transition-all duration-300"
>
  <ArrowUpRight size={22} />
</button>

</div>
    </div>
  );
};

export default Hero;