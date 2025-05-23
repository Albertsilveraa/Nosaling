import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agents from './components/Agents';
import Impact from './components/Impact';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Agents />
        <Impact />
      </main>
    </div>
  );
}

export default App;
