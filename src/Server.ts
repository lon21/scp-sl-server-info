import { DataOptions, ServerInfo } from './Interfaces';
import fetch from 'node-fetch';

export default class Server {

	public readonly getData: (options: DataOptions) => Promise<ServerInfo>;

	private readonly startCooldownTimer: (cooldown: number) => Promise<void>;
	private cooldown: number = 0;
	private lastData?: ServerInfo;

	constructor(ip: string, key: string) {
		if (!ip) throw new Error('ip is required');
		if (!key) throw new Error('key is required');

		this.startCooldownTimer = (cooldown: number) => new Promise(resolve => {
			setTimeout(() => {
				this.cooldown = 0;
				resolve();
			}, cooldown);
		});

		this.getData = (options: DataOptions = {
			lastOnline: false,
			players: false,
			playerList: false,
			info: false,
			pastebin: false,
			version: false,
			flags: false,
			nicknames: false,
			online: false
		}) => new Promise(async (resolve, reject) => {

			if (this.cooldown !== 0) {
				if (this.lastData) return resolve(this.lastData);
				else return reject('Ratelimit exceeded');
			}

			let baseLink = `https://api.scpslgame.com/serverinfo.php/?ip=${ ip }&key=${ key }`;

			if (options.lastOnline) baseLink += '&lastOnline=true';
			if (options.players) baseLink += '&players=true';
			if (options.playerList) baseLink += '&playerList=true';
			if (options.info) baseLink += '&info=true';
			if (options.pastebin) baseLink += '&pastebin=true';
			if (options.version) baseLink += '&version=true';
			if (options.flags) baseLink += '&flags=true';
			if (options.nicknames) baseLink += '&nicknames=true';
			if (options.online) baseLink += '&online=true';

			const res = await fetch(baseLink);
			const data: ServerInfo = await res.json();

			if (data.Error) return reject(data.Error);

			if (options.info) {
				 data.Servers.map(server => {server.Info = Buffer.from(server.Info, 'base64').toString('utf-8');
				});
			}
			this.cooldown = data.Cooldown;
			this.lastData = data;
			this.startCooldownTimer(data.Cooldown);
			resolve(data);
		});
	}
}