import About from "./components/About";
import Education from "./components/Education";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-surface-light-primary dark:bg-linear-to-r from-surface-dark-primary to-surface-dark-secondary">
      <Header />
      <About />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
