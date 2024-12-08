export interface ServerStatus {
  online: boolean;
  players: number;
  maxPlayers: number;
  queueLength?: number;
}

export interface ServerInfo {
  name: string;
  description: string;
  features: string[];
}