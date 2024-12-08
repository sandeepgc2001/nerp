import React, { useState, useEffect } from 'react';
import { ServerStatus } from './types/server';
import { Hero } from './components/Hero';
import { FeatureCard } from './components/FeatureCard';
import { serverInfo } from './data/serverInfo';
import {
  Briefcase,
  Building2,
  Calendar,
  Shield,
  Car,
  Users,
} from 'lucide-react';

function App() {
  const [serverStatus, setServerStatus] = useState<ServerStatus>({
    online: true,
    players: 20,
    maxPlayers: 64,
    queueLength: 0,
  });

  const features = [
    { icon: <Briefcase size={24} />, title: 'Custom Jobs & Careers' },
    { icon: <Building2 size={24} />, title: 'Player-owned Businesses' },
    { icon: <Calendar size={24} />, title: 'Regular Events' },
    { icon: <Shield size={24} />, title: 'Active Staff Team' },
    { icon: <Car size={24} />, title: 'Custom Vehicle Mods' },
    { icon: <Users size={24} />, title: 'Thriving Community' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero serverStatus={serverStatus} />

      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Server Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="py-20 px-4 bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
          <p className="text-gray-300 mb-8">
            our Nepali-themed roleplay server, featuring stunning recreations of
            iconic Nepali monasteries, and breathtaking landscapes. Dive into an
            immersive experience showcasing Nepal's rich culture, architecture,
            and spiritual heritage. Join us and be a part of this unique
            roleplay today!
          </p>
          <div className="bg-gray-700 p-4 rounded-lg mb-8">
            <code className="text-lg">Connect cfx.re/join/3756mz</code>
          </div>
          <div className="flex gap-4 justify-center">
            <a
              href="https://discord.gg/cVQw6XZmjE"
              className="bg-[#5865F2] hover:bg-[#4752C4] px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Join Discord
            </a>
            <a
              href="https://fivem.net/"
              className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Download FiveM
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
