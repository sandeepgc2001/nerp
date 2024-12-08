import React from 'react';

interface Props {
  title: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, icon }: Props) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
      <div className="flex items-center gap-4">
        <div className="text-primary-500">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}