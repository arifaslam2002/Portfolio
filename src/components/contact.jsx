import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen px-5 sm:px-8 md:px-10 py-20 text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-white/50 text-sm tracking-[5px]">
            GET IN TOUCH
          </p>

          <h2 className="text-5xl sm:text-6xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="mt-5 text-white/60 max-w-xl leading-7">
            Have a project idea, job opportunity, or just want to say hello?
            Feel free to reach out. I'm always open to discussing new
            opportunities and interesting projects.
          </p>
        </div>


        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Side */}
          <div
            className="
              bg-black/30
              border border-white/10
              backdrop-blur-sm
              rounded-2xl
              p-8
            "
          >

            <h3 className="text-2xl font-bold">
              Contact Me
            </h3>

            <p className="text-white/50 mt-3 leading-7">
              I'm currently looking for opportunities where I can
              use my MERN Stack skills and continue growing as a developer.
            </p>


            {/* Email */}
            <div className="flex items-center gap-4 mt-8">
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-orange-400
                  flex
                  items-center
                  justify-center
                  text-black
                "
              >
                <Mail size={20} />
              </div>

              <div>
                <p className="text-white/40 text-sm">
                  Email
                </p>

                <p className="text-white">
                  your-email@gmail.com
                </p>
              </div>
            </div>


            {/* GitHub */}
            <div className="flex items-center gap-4 mt-6">
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-orange-400
                  flex
                  items-center
                  justify-center
                  text-black
                "
              >
  
              </div>

              <div>
                <p className="text-white/40 text-sm">
                  GitHub
                </p>

                <p className="text-white">
                  github.com/arifaslam2002
                </p>
              </div>
            </div>


            {/* LinkedIn */}
            <div className="flex items-center gap-4 mt-6">
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-orange-400
                  flex
                  items-center
                  justify-center
                  text-black
                "
              >
              </div>

              <div>
                <p className="text-white/40 text-sm">
                  LinkedIn
                </p>

                <p className="text-white">
                  linkedin.com/in/arif-a-87b927223
                </p>
              </div>
            </div>

          </div>


          {/* Right Side - Form */}
          <div
            className="
              bg-black/30
              border border-white/10
              backdrop-blur-sm
              rounded-2xl
              p-8
            "
          >

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    bg-white/10
                    border
                    border-white/10
                    text-white
                    placeholder:text-white/30
                    outline-none
                    focus:border-orange-300
                    transition-all
                  "
                />
              </div>


              {/* Email */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    bg-white/10
                    border
                    border-white/10
                    text-white
                    placeholder:text-white/30
                    outline-none
                    focus:border-orange-300
                    transition-all
                  "
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    bg-white/10
                    border
                    border-white/10
                    text-white
                    placeholder:text-white/30
                    outline-none
                    resize-none
                    focus:border-orange-300
                    transition-all
                  "
                />
              </div>


              {/* Send Button */}
              <button
                type="submit"
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-lg
                  bg-orange-400
                  text-black
                  font-bold
                  hover:bg-white
                  transition-all
                  duration-300
                "
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;