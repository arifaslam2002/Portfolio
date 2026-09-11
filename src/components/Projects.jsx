import { useState } from "react";
import { LoaderCircle, ExternalLink } from "lucide-react";

import expenseImg from "../assets/projects/expense.png";
import adviseImg from "../assets/projects/advise.png";
import notesImg from "../assets/projects/notes.png";
import weatherImg from "../assets/projects/w.png";
import movieImg from "../assets/projects/movie.png";
import shoppingImg from "../assets/projects/shopping.png";
import studentsImg from "../assets/projects/students.png";
import jobportalImg from "../assets/projects/jobportal.png";
import recipeImg from "../assets/projects/recipe.png";
import appointmentImg from "../assets/projects/appointment.png";

const ProjectImage = ({ image, title }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-80 overflow-hidden rounded-xl bg-black/40">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderCircle size={35} className="animate-spin text-orange-300" />
        </div>
      )}

      <img
        src={image}
        alt={title}
        onLoad={() => setLoading(false)}
        className={`
          w-full
          h-full
          object-cover
          transition-all
          duration-500
          group-hover:scale-105
          ${loading ? "opacity-0" : "opacity-100"}
        `}
      />
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Expense Tracker",
      image: expenseImg,

      details:
        "A personal expense tracking application built with React to help users manage their daily spending. Users can add and organize expenses based on different categories. The application calculates and displays useful expense statistics for better financial tracking. React state management is used to handle the application data and user interactions. The interface is designed to be simple, responsive, and easy to use. This project helped me improve my understanding of React components, state, forms, and array operations.",

      tech: ["React", "Tailwind CSS", "JavaScript"],

      github: "https://github.com/arifaslam2002/expenseTracker",
      live: "https://expense-tracker-kappa-one-3xbo4il14m.vercel.app/",
    },

    {
      id: 2,
      title: "Advise App",
      image: adviseImg,

      details:
        "A simple advice application that fetches random advice from an external API. Users can click a button to receive a new piece of advice dynamically. The project uses React state and API requests to update the displayed content. I also added loading and interactive UI states to improve the user experience. The application demonstrates how React can communicate with third-party APIs. This project helped me practice asynchronous operations, useEffect, API integration, and conditional rendering.",

      tech: ["React", "API", "JavaScript"],

      github: "https://github.com/arifaslam2002/adviseApp",
      live: "https://advise-app-steel.vercel.app/",
    },

    {
      id: 3,
      title: "Notes App",
      image: notesImg,

      details:
        "A notes management application built with React for creating and managing personal notes. Users can create new notes and view their saved notes through a clean interface. React Router is used to manage navigation between different pages of the application. Material UI components and icons are used to improve the visual design and user experience. The application focuses on reusable components and simple state management. This project helped me understand routing, forms, component communication, and CRUD-style operations in React.",

      tech: ["React", "React Router", "MUI"],

      github: "https://github.com/arifaslam2002/NotesApp",
      live: "https://notes-app-rho-eight-84.vercel.app",
    },

    {
      id: 4,
      title: "Weather App",
      image: weatherImg,

      details:
        "A weather application that allows users to search for weather information based on a location. The application uses an external weather API to retrieve current weather data. Users can view information such as temperature, humidity, and wind speed. React hooks are used to manage API data, loading states, and errors. Tailwind CSS is used to create a responsive and modern user interface. This project helped me improve my understanding of API integration, asynchronous JavaScript, React hooks, and conditional rendering.",

      tech: ["React", "API", "Tailwind CSS"],

      github: "https://github.com/arifaslam2002/WeatherApp",
      live: "https://weather-app-tau-snowy-30.vercel.app/",
    },

    {
      id: 5,
      title: "Movie Search",
      image: movieImg,

      details:
        "A movie discovery application that allows users to search for movies and explore available information. The application integrates the TVMaze API to retrieve movie and show data dynamically. Users can search for specific shows and open a separate details page for more information. React Router is used to handle navigation between the movie listing and details pages. Loading states and API error handling are included to improve the user experience. This project helped me practice API integration, search functionality, routing, reusable components, and asynchronous data fetching.",

      tech: ["React", "API", "React Router"],

      github: "https://github.com/arifaslam2002/Movie-Search",
      live: "https://movie-search-puce-nine.vercel.app/",
    },

    {
      id: 6,
      title: "Shopping Cart",
      image: shoppingImg,

      details:
        "A shopping cart application built with React to simulate a basic e-commerce experience. Products are fetched from the DummyJSON API and displayed using reusable product components. Users can add products to the cart and increase or decrease product quantities. The application dynamically calculates the cart information based on the selected products. React state management is used to handle products and cart operations. This project helped me strengthen my understanding of arrays, objects, state management, API integration, and reusable React components.",

      tech: ["React", "API", "Tailwind CSS"],

      github: "https://github.com/arifaslam2002/shopping-Cart",
      live: "https://shopping-cart-pi-blond.vercel.app/",
    },

    {
      id: 7,
      title: "Student Management Dashboard",
      image: studentsImg,

      details:
        "A student management dashboard designed to manage student information in a structured interface. Users can add, edit, and delete student records from the dashboard. Search and filtering functionality makes it easier to find specific students. The dashboard also provides statistics to give a quick overview of the stored student data. React state and reusable components are used to manage the application efficiently. This project helped me practice forms, CRUD operations, filtering, searching, sorting, pagination, and dashboard UI development.",

      tech: ["React", "Tailwind CSS", "JavaScript"],

      github: "https://github.com/arifaslam2002/Student-Management-Dashboard",
      live: "https://student-management-dashboard-indol.vercel.app/",
    },

    {
      id: 8,
      title: "DailyHire Job Portal",
      image: jobportalImg,

      details:
        "A job portal designed to connect employers with workers looking for daily and short-term job opportunities. Users can register as either an employer or a worker depending on their role. Employers can create job posts and review applications submitted by workers. Workers can browse available jobs and submit bids for suitable opportunities. LocalStorage is used to store users, jobs, bids, and application-related information. This project helped me practice role-based UI, React Router, forms, state management, LocalStorage, job applications, and interactive dashboards.",

      tech: ["React", "Tailwind CSS", "React Router", "LocalStorage"],

      github: "https://github.com/arifaslam2002/JOB-Portal",
      live: "https://job-portal-one-dusky.vercel.app/",
    },

    {
      id: 9,
      title: "Recipe Finder",
      image: recipeImg,

      details:
        "A recipe finder application that allows users to discover recipes through an external API. Users can search for recipes based on their preferred food or ingredients. Recipe information is dynamically displayed based on the API response. React hooks are used to manage search input, loading states, and fetched recipe data. The interface is designed to provide a simple and responsive recipe discovery experience. This project helped me practice API integration, search functionality, asynchronous requests, state management, and responsive UI development.",

      tech: ["React", "API", "Tailwind CSS"],

      github: "https://github.com/arifaslam2002/Recipe-Finder-App",
      live: "https://recipe-finder-app-steel.vercel.app/",
    },

    {
      id: 10,
      title: "Appointment Scheduler",
      image: appointmentImg,

      details:
        "An appointment scheduling application designed to manage appointments in an organized dashboard. Users can create new appointments by entering customer and appointment information. Existing appointments can be edited or deleted when required. Search and filtering features make it easier to manage different appointment statuses. React state and reusable components are used to keep the application structure clean and maintainable. This project helped me practice forms, CRUD operations, search, filtering, state management, and dashboard-style application development.",

      tech: ["React", "Tailwind CSS", "JavaScript"],

      github: "https://github.com/arifaslam2002/Appointment-Scheduler",
      live: "https://appointment-scheduler-nine-beta.vercel.app/",
    },
  ];

  return (
    <section className="min-h-screen px-5 md:px-10 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-white/50 text-sm tracking-[5px]">MY WORK</p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">Projects</h2>
        </div>

        {/* One Card Per Row */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                group
                relative
                overflow-hidden
                p-6 md:p-8
                rounded-2xl
                bg-black/30
                border border-white/10
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-black/50
                hover:border-orange-300/40
                hover:shadow-[0_0_30px_rgba(242,107,56,0.15)]
              "
            >
              {/* Image */}
              <ProjectImage image={project.image} title={project.title} />

              {/* Number + Task */}
              <div className="flex justify-between items-center mt-6">
                <span
                  className="
                    text-5xl
                    font-black
                    text-white/10
                    transition-all
                    duration-500
                    group-hover:text-orange-300/20
                  "
                >
                  {String(project.id).padStart(2, "0")}
                </span>

                <span className="text-white/30 text-sm">
                  PROJECT {project.id}/10
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  text-3xl
                  font-bold
                  mt-4
                  transition-all
                  duration-300
                  group-hover:text-orange-300
                "
              >
                {project.title}
              </h3>

              {/* Detailed Description */}
              <p className="mt-4 text-white/60 leading-7 max-w-5xl">
                {project.details}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="
                      px-3
                      py-1
                      text-xs
                      rounded-full
                      bg-white/10
                      text-white/60
                      border
                      border-white/10
                      transition-all
                      duration-300
                      group-hover:border-orange-300/30
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-6 mt-7">
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-white/70
                    hover:text-orange-300
                    transition-all
                    duration-300
                  "
                >
                  <span>⌘</span>
                  GitHub
                </a>

                {/* Live */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-white/70
                    hover:text-orange-300
                    transition-all
                    duration-300
                  "
                >
                  <ExternalLink size={18} />
                  View Live
                </a>
              </div>

              {/* Bottom Line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-orange-300
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
