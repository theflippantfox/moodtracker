import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { CLIENT_ID, GUILD_ID, TOKEN } from './config';

// Register Slash Command
const commands = [
	new SlashCommandBuilder()
		.setName('mood')
		.setDescription('Record your mood')
		.addIntegerOption(option =>
			option.setName('mood')
				.setDescription('Your mood (0-10)')
				.setRequired(true))
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		// Register commands for a specific guild (use client ID for global commands)
		await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

