
import { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const cards = [
    {
      number: "01",
      title: "Who I Am",
      text: "A Computer Science graduate from Trivandrum with a strong interest in web development.",
      animation: "animate-float1",
    },
    {
      number: "02",
      title: "What I Do",
      text: "I build modern and responsive web applications using the MERN Stack.",
      animation: "animate-float2",
    },
    {
      number: "03",
      title: "My Skills",
      text: "MongoDB, Express.js, React.js, Node.js, GitHub, Postman and more.",
      animation: "animate-float3",
    },
    {
      number: "04",
      title: "My Goal",
      text: "To keep learning, improve my development skills, and contribute to real-world projects.",
      animation: "animate-float4",
    },
  ];

  return (
    <section className="min-h-screen px-10 py-20 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-white/50 text-sm tracking-[5px]">
            ABOUT ME
          </p>

          <h2 className="text-6xl font-bold mt-3">
            Who Am I?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {cards.map((card, index) => (
            <div
              key={card.number}
              className={`
                group relative overflow-hidden
                min-h-55 p-8 rounded-2xl
                bg-black/30 border border-white/10
                backdrop-blur-sm
                transition-all duration-700
                hover:-translate-y-3
                hover:bg-black/50
                ${card.animation}
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >

              {/* Number */}
              <span
                className="
                  text-5xl font-black text-white/10
                  group-hover:text-orange-300/20
                  transition-all duration-500
                "
              >
                {card.number}
              </span>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 text-white/60 leading-7 max-w-md">
                  {card.text}
                </p>
              </div>

              {/* Orange bottom line */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-1 w-0
                  bg-orange-300
                  group-hover:w-full
                  transition-all duration-500
                "
              />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;