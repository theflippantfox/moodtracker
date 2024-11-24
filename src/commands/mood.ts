import { Interaction } from 'discord.js';

export const recordMood = async (interaction: Interaction) => {
	if (!interaction.isCommand()) return;  // Ensure it's a command interaction

	try {
		// Acknowledge the interaction immediately (Type 1 response)
		await interaction.deferReply();

		// Assuming you want to get mood from the interaction
		const args = interaction.options.get('mood')

		if (args !== null) {
			await interaction.editReply(`Your mood (${args}) has been recorded!`);
		} else {
			await interaction.editReply('Please provide a valid mood number between 0 and 10.');
		}
	} catch (error) {
		console.error('Error handling interaction:', error);
		// Ensure that the reply is sent in case of error
		if (interaction.deferred || interaction.replied) {
			await interaction.editReply('There was an error with the interaction.');
		} else {
			await interaction.reply('There was an error with the interaction.');
		}
	}
};

