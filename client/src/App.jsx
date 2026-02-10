import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useState } from 'react';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="certifications" element={<Certifications />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
