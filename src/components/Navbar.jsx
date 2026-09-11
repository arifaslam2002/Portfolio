const Navbar = () => {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        flex items-center justify-between
        w-3/4
        mt-5
        px-5 sm:px-10 md:px-16 lg:px-20
        bg-orange-400
        rounded-r-xl
        py-3
      "
    >

      {/* Logo */}
      <div
        onClick={() => scrollToSection("home")}
        className="cursor-pointer"
      >
        <div className="font-bold text-xl sm:text-2xl">
          <span className="text-white">Arif'</span>s
        </div>
      </div>


      {/* Navigation */}
      <div className="flex gap-4 sm:gap-6 md:gap-10 lg:gap-15">

        <button
          onClick={() => scrollToSection("about")}
          className="
            font-bold
            text-sm sm:text-base md:text-xl
            text-white
            hover:text-black
            transition-colors
            duration-300
            cursor-pointer
          "
        >
          .About
        </button>


        <button
          onClick={() => scrollToSection("contact")}
          className="
            font-bold
            text-sm sm:text-base md:text-xl
            text-white
            hover:text-black
            transition-colors
            duration-300
            cursor-pointer
          "
        >
          .Contact
        </button>


        <button
          onClick={() => scrollToSection("projects")}
          className="
            font-bold
            text-sm sm:text-base md:text-xl
            text-white
            hover:text-black
            transition-colors
            duration-300
            cursor-pointer
          "
        >
          .Projects
        </button>

      </div>

    </div>
  );
};

export default Navbar;