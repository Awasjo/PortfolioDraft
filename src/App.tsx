import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import TechnologyStack from "./components/TechnologyStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pt-[72px]"> {/* Adjust this value to match your navbar height */}
      <Header />
      {/* Hero Section */}
      <section
        id="hero"
        className="h-[50vh] bg-cover bg-center flex-center flex-col"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1693255673359-9535d9a1dd65?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="text-center px-4">
          <p className="text-2xl md:text-5xl font-bold text-white leading-tight">
            Welcome to My Portfolio
          </p>
          <p className="text-l md:text-xl mt-4 text-white">Awas Jomail</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <h2 className="section-heading">Projects</h2>
        <div className="grid-responsive">
          {/* Placeholder for project cards */}
          <ProjectCard
            image="/astravita-logo-alt.svg"
            link="https://github.com/Awasjo/AstraVita-MERN-Project"
            title="AstraVita"
          />
          <ProjectCard
            image="/Expo.svg"
            link="https://github.com/Awasjo/Personal-Finance-Management-App/tree/main#"
            title="Personal Financial Management App "
          />
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="secondary-bg text-amber-50 section-container shadow-lg"
      >
        <h2 className="section-heading">Resume</h2>
        <div className="flex-responsive justify-between">
          <div className="flex-1 primary-card">
            <h3 className="font-bold text-lg mb-2">Work</h3>
            <p className="text-sm">
              Production Application Support Analyst <br />
              January 2023 - December 2023
            </p>
          </div>
          <div className="flex-1 primary-card">
            <h3 className="font-bold text-lg mb-2">Education</h3>
            <p className="text-sm">
              Software Engineering Technology Diploma <br /> September 2021 -
              December 2024
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href="/resume.pdf"
            className="button-primary"
          >
            View PDF
          </a>
        </div>
      </section>

      {/* Technologies Section */}
      <TechnologyStack />

      {/* About Me Section */}
      <section id="about" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <p className="text-center max-w-2xl mx-auto">
          I am currently exploring opportunities in web development and working
          on personal projects to enhance my skills.
        </p>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
