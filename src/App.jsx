import ProjectDetails from "./pages/ProjectDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-6xl text-brand-burgundy mb-4">
        404
      </h1>
      <p className="text-brand-muted text-lg mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-brand-burgundy text-white px-7 py-3 rounded-full"
      >
        Back to Home
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
    <a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-4 focus:text-brand-burgundy"
>
  Skip to main content
</a>
      <div className="min-h-screen bg-brand-cream dark:bg-brand-darkbg text-brand-dark dark:text-brand-lighttext transition-colors duration-300">
        <Navbar />
      <main id="main-content"> 
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/projects/:projectId" element={<ProjectDetails />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
</main> 
       
      </div>
    </BrowserRouter>
  );
}

export default App;
