import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-surface-light-primary dark:bg-linear-to-r from-surface-dark-primary to-surface-dark-secondary">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
