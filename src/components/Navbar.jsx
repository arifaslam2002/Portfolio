const Navbar = () => {
  return (
    <div className="flex justify-between w-3/4 mt-10">

      <div className="ml-20">
        <div className="font-black text-6xl name-animation">
          <span className="text-green-500">Arif</span>'s
        </div>

        <div className="animated-underline"></div>
      </div>

      <div className="flex gap-7">
        <p className="font-black text-xl hover:text-amber-50">
          .About
        </p>

        <p className="font-black text-xl hover:text-amber-50">
          .Contact
        </p>

        <p className="font-black text-xl hover:text-amber-50">
          .Projects
        </p>
      </div>

    </div>
  );
};

export default Navbar;