import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agents from './components/Agents';
import Impact from './components/Impact';
import ImpactStats from './components/ImpactStats';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Agents />
        <ImpactStats />
        <Impact />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;
