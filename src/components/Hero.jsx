import ProfileImg from "../assets/profilehd.png";
import avatarimg from "../assets/avatar.png";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center mt-16 lg:mt-33 px-4 lg:px-0">

      {/* Faded name behind */}
      <h1 className="hidden lg:block absolute bottom-100 left-55 z-0 text-[180px] font-black text-white/10">
        ARIF ASLAM
      </h1>

      {/* Left name */}
      <div className="relative z-10 order-2 lg:order-none mr-0 lg:mr-10 mt-6 lg:mt-114">
        <h1
          className="font-bold text-white/20 text-4xl sm:text-5xl lg:text-7xl ml-0 lg:ml-8.5 text-center lg:text-left
          [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
        >
          ARIF.A
        </h1>
      </div>

      {/* Profile image */}
      <div className="relative z-10 order-1 lg:order-none">
        <img
          className="h-56 sm:h-80 lg:h-130 ml-0 lg:ml-60 mx-auto object-contain
          [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          src={ProfileImg}
          alt="Arif A"
        />
      </div>

      {/* Description - right top corner */}
      <div className="relative lg:absolute top-0 lg:top-15 left-0 lg:left-55 w-full lg:w-64 z-20 order-0 lg:order-none mb-4 lg:mb-0 text-center lg:text-left">
        <p className="text-white text-base lg:text-lg font-medium leading-relaxed">
          I’m a passionate <span className="text-black font-bold text-lg lg:text-xl">MERN</span> Stack Developer focused on building modern,
          responsive, and <br className="hidden lg:block" /> user-friendly web applications.
        </p>
      </div>
       <div
  className="
    absolute
    z-20
    top-75
    left-5
    sm:left-8
    md:left-auto
    md:right-10
    lg:right-20
    flex
    flex-wrap
    gap-3
  "
>
  {/* View Projects */}
  <button
    onClick={() =>
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="
      px-5
      py-3
      rounded-full
      bg-black
      text-white
      font-bold
      text-sm
      hover:bg-orange-300
      hover:text-black
      transition-all
      duration-300
    "
  >
    View Projects →
  </button>

  {/* Download Resume */}
  <a
    href="/resume.pdf"
    download="resume.pdf"
    className="
      px-5
      py-3
      rounded-full
      border
      border-white/30
      text-white
      font-bold
      text-sm
      hover:bg-white
      hover:text-black
      transition-all
      duration-300
    "
  >
    Download Resume
  </a>
</div>
      <div className="relative lg:absolute right-0 lg:right-20 bottom-0 lg:bottom-12 w-full sm:w-80 h-auto sm:h-21 bg-black flex rounded-lg order-3 lg:order-none mt-6 lg:mt-0">

        <div>
          <img
            className="w-16 sm:w-20 p-2.5 rounded-full"
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
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="
    ml-auto
    mr-3
    my-auto
    flex
    items-center
    justify-center
    w-10
    h-10
    rounded-full
    bg-orange-400
    hover:bg-white
    hover:text-black
    transition-all
    duration-300
  "
>
  <ArrowUpRight size={22} />
</button>

      </div>
    </div>
  );
};

export default Hero;