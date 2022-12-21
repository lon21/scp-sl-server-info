interface Player {
	id: string;
	nickname: string;
}

export interface DataOptions {
	lastOnline?: boolean;
	players?: boolean;
	playerList?: boolean;
	info?: boolean;
	pastebin?: boolean;
	version?: boolean;
	flags?: boolean;
	nicknames?: boolean;
	online?: boolean;
}

interface Server {
	ID: string;
	Port: string;
	Online: boolean;
	Players: string;
	PlayersList: Player[];
	Info: string;
	Version: string;
	Pastebin: string;
	FF: boolean;
	WL: boolean;
	Modded: boolean;
	Mods: number;
	Suppress: number;
	AutoSuppress: boolean;
}

export interface ServerInfo {
	Cooldown: number;
	Success: boolean;
	Error?: string;
	Servers: Server[];
}