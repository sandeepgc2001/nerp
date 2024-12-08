import React from 'react';
import { ServerStatus } from '../types/server';
import { Users } from 'lucide-react';

interface Props {
  status: ServerStatus;
}

export function ServerStatusBadge({ status }: Props) {
  return (
    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${status.online ? 'bg-green-500' : 'bg-red-500'}`} />
        <span className="font-medium">{status.online ? 'Online' : 'Offline'}</span>
      </div>
      <div className="flex items-center gap-2">
        <Users size={18} />
        <span>{status.players}/{status.maxPlayers}</span>
      </div>
      {status.queueLength !== undefined && status.queueLength > 0 && (
        <div className="text-yellow-400">
          Queue: {status.queueLength}
        </div>
      )}
    </div>
  );
}