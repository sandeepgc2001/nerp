import React from 'react';
import { ServerStatusBadge } from './ServerStatusBadge';
import { ServerStatus } from '../types/server';

interface Props {
  serverStatus: ServerStatus;
}

export function Hero({ serverStatus }: Props) {
  return (
    <div className="relative h-[80vh] flex items-center justify-center"
         style={{
           backgroundImage: 'url("https://images.unsplash.com/photo-1544200175-ca6e80a7b323?auto=format&fit=crop&q=80")',
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold text-white">NEPAL ELITE ROLEPLAY</h1>
        <p className="text-xl text-gray-200">
          Experience the most immersive GTA V roleplay server with a thriving community,
          custom jobs, and endless possibilities.
        </p>
        <ServerStatusBadge status={serverStatus} />
        <div className="flex gap-4 justify-center">
          <a href="https://cfx.re/join/3756mz" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Connect Now
          </a>
          <a href="#features" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}