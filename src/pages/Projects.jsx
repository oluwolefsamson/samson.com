import { motion } from "framer-motion";

import PropTypes from "prop-types";

import LineGradient from "../components/LineGradient";

// motion div parent variant.
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, // Adds an incrementing delay to each motion div child.
  },
};
// motion div child variant.
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function Project({ title, subtitle, link }) {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-black`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="font-playfair">{subtitle}</p>
        <p className="mt-7 cursor-pointer">
          <a href={link} target="_blank" rel="noreferrer noopener">
            View More
          </a>
        </p>
      </div>
      {/* Uses images in the public folder for dynamic pathing */}
      <img alt={projectTitle} src={`/images/${projectTitle}.png`} />
    </motion.div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function Projects() {
  return (
    <section id="projects" className="mx-auto py-36 md:bg-gradient-space">
      {/* Header */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY PRO<span className="text-red">JECTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Here's a showcase of the projects I'm currently most proud of. <br />
          Feel free to explore each one by clicking on its image.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center px-8">
        <motion.div
          className="sm:grid sm:grid-cols-3 px-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Row 5 */}

          <Project
            title="Project 8"
            subtitle="AcademEase"
            link="https://academease-neon.vercel.app"
          />

          <motion.div
            variants={projectVariant}
            className="flex justify-center text-center items-center p-10 bg-red max-w-[600px] min-h-[200px] text-2xl font-playfair font-semibold"
          ></motion.div>
          <Project
            title="Project 0"
            subtitle="Arsenal FC"
            link="https://github.com/oluwolefsamson/Arsenal-FC"
          />

          {/* Row 1 */}
          <motion.div
            variants={projectVariant}
            className="flex justify-center text-center items-center p-10 bg-blue max-w-[600px] min-h-[200px] text-2xl font-playfair font-semibold"
          ></motion.div>

          <Project
            title="project 11"
            subtitle="Inventory Management System"
            link="https://github.com/oluwolefsamson/Inventory-Management-System"
          />
          <Project
            title="Project 2"
            subtitle="Real Estate"
            link="https://github.com/oluwolefsamson/equilibrium-website"
          />

          {/* Row 2 */}
          <Project
            title="Project 3"
            subtitle="Medical Appointment & Booking"
            link="https://github.com/oluwolefsamson/Mern-Doctor-Appointment-App-Frontend"
          />
          <motion.div
            variants={projectVariant}
            className="flex justify-center text-center items-center p-10 bg-red max-w-[600px] min-h-[200px] text-2xl font-playfair font-semibold"
          ></motion.div>
          <Project
            title="Project 4"
            subtitle="Consultancy"
            link="https://github.com/oluwolefsamson/Productivity-Consultancy-website"
          />

          {/* Row 3 */}
          <Project
            title="Project 5"
            subtitle="Korean Kitchen"
            link="https://github.com/oluwolefsamson/Korean-Kitchen"
          />
          <Project
            title="Project 6"
            subtitle=" My Portfolio"
            link="https://github.com/oluwolefsamson/samson.com"
          />

          <motion.div
            variants={projectVariant}
            className="flex justify-center text-center items-center p-10 bg-yellow max-w-[600px] min-h-[200px] text-2xl font-playfair font-semibold"
          ></motion.div>

          {/* Row 4 */}

          <Project
            title="Project 1"
            subtitle="Dashboard"
            link="https://github.com/oluwolefsamson/Dashboard"
          />
          <motion.div
            variants={projectVariant}
            className="flex justify-center text-center items-center p-10 bg-red max-w-[600px] min-h-[200px] text-2xl font-playfair font-semibold"
          ></motion.div>

          <Project
            title="Project 10"
            subtitle="Banking Saas Landing Page"
            link="https://github.com/oluwolefsamson/Banking-website-Fullstack"
          />

          {/* Row 6 */}

          <motion.div
            variants={projectVariant}
            className="flex justify-center text-center items-center p-10 bg-red max-w-[600px] min-h-[200px] text-2xl font-playfair font-semibold"
          ></motion.div>

          <Project
            title="Project 0"
            subtitle="Arsenal FC"
            link="https://github.com/oluwolefsamson/Arsenal-FC"
          />
          <Project
            title="Project 9"
            subtitle="E-Commerce"
            link="https://github.com/oluwolefsamson/E-Commerce-Website"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
