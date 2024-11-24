import { Client, GatewayIntentBits, Interaction } from 'discord.js';
import { TOKEN } from './token';
import { recordMood } from './commands/mood';

import "./slash"

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,              // Required for general guild events
		GatewayIntentBits.GuildMessages,       // Required for message events
		GatewayIntentBits.MessageContent,      // Required to read message content
	],
});

client.once('ready', () => {
	console.log('Bot is online!');
});

// Handling slash commands
client.on('interactionCreate', async (interaction: Interaction) => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	switch (commandName) {
		case 'mood': {
			recordMood(interaction)
			break
		}
	}
});

client.login(TOKEN);

