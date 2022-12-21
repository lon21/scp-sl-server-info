# SCP: Secret Laboratory server info

## Important

**To use this package u need have api key and your server have to be verified!**

Type !api in your server console to get more info.

## Usage

```ts
import Server from 'scp-sl-server-info';

const server = new Server('IP of your server', 'Api key');

// Then usage

server.getData(options).then(data => {
	console.log(data);
}).catch(err => console.error(err));

// Async/Await usage

(async () => {
	try {
		const data = await server.getData(options);
		console.log(data);
	} catch (err) {
		console.error(err);
	}
})();
```

## Options

|    Option    | Description                                 |
|:------------:|:--------------------------------------------|
| `lastOnline` | Displays when server was last online        |
|  `players`   | Displays how many players are in the server |
| `playerList` | Displays list of players playing right now  |
| `nicknames`  | Displays nicknames of playing players       |
|    `info`    | Displays MOTD of server                     |
|  `pastebin`  | Displays pastebin link of server            |
|  `version`   | Displays what version server is running on  |
|   `flags`    | Displays flags of the server                |
|   `online`   | Displays online status of server            |

__By default, each option is set to `false`!__