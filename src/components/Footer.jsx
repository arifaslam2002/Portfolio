import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 px-5 sm:px-8 md:px-10 py-10 text-white">

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black">
              <span className="text-orange-300">Arif</span>.A
            </h2>

            <p className="text-white/40 text-sm mt-2">
              MERN Stack Developer
            </p>
          </div>


          {/* Social Links */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/arifaslam2002"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11
                rounded-full
                bg-black/30
                border border-white/10
                flex items-center justify-center
                hover:bg-orange-300
                hover:text-black
                transition-all duration-300
              "
            >
              <FaGithub size={19} />
            </a>


            <a
              href="https://linkedin.com/in/arif-a-87b927223"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11
                rounded-full
                bg-black/30
                border border-white/10
                flex items-center justify-center
                hover:bg-orange-300
                hover:text-black
                transition-all duration-300
              "
            >
              <FaLinkedinIn size={19} />
            </a>


            <a
              href="mailto:aarifaslam2002@gmail.com"
              className="
                w-11 h-11
                rounded-full
                bg-black/30
                border border-white/10
                flex items-center justify-center
                hover:bg-orange-300
                hover:text-black
                transition-all duration-300
              "
            >
              <Mail size={19} />
            </a>

          </div>


          {/* Back To Top */}
          <button
            onClick={goToTop}
            className="
              w-11 h-11
              rounded-full
              bg-orange-300
              text-black
              flex items-center justify-center
              hover:bg-white
              transition-all duration-300
            "
          >
            <ArrowUp size={20} />
          </button>

        </div>


        {/* Bottom */}
        <div
          className="
            mt-10
            pt-6
            border-t border-white/10
            text-center
            text-white/30
            text-sm
          "
        >
          © 2026 Arif.A — Built with React & Tailwind CSS
        </div>

      </div>

    </footer>
  );
};

export default Footer;