interface Player {
	id: string;
	nickname: string;
}

export interface DataOptions {
	lastOnline: boolean | null;
	players: boolean | null;
	playerList: boolean | null;
	info: boolean | null;
	pastebin: boolean | null;
	version: boolean | null;
	flags: boolean | null;
	nicknames: boolean | null;
	online: boolean | null;
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
	Supress: number;
	AutoSupress: boolean;
}

export interface ServerInfo {
	Cooldown: number;
	Success: boolean;
	Error: string | null;
	Servers: Server[];
}