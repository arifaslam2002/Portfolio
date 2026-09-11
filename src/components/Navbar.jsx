const Navbar = () => {
  return (
    <div className="flex justify-between w-3/4 mt-10">

      <div className="ml-20">
        <div className="font-bold text-2xl">
          <span className="text-white">Arif'</span>s
        </div>
      </div>

      <div className="flex gap-15">
        <p className="font-bold text-xl text-white  hover:text-black  ">
          .About
        </p>

        <p className="font-bold text-xl text-white hover:text-black  ">
          .Contact
        </p>

        <p className="font-bold text-xl text-white hover:text-black ">
          .Projects
        </p>
      </div>

    </div>
  );
};

export default Navbar;