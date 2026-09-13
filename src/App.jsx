import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

const techFetch = async () => {
  const res = await fetch('/techData.json');
  return res.json();
};

const techPromise = techFetch();

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="container mx-auto">Loading Tech Stack...</div>}>
        <TechStack techPromise={techPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
