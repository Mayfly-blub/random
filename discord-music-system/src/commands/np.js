'use strict';

const CurrentSongEmbed = require('../embeds/current-song-embed');
const ErrorEmbed = require('../embeds/error-embed');

const np = {
	name: 'current',
	description: 'Display the currently played song',
	async execute(message, arg, musicBot) {
		const serverQueue = musicBot.queue.get(message.guild.id);

		if (!serverQueue) {
			return message.channel.send(new ErrorEmbed('There is no song currently playing!'));
		}

		message.channel.send(new CurrentSongEmbed(serverQueue.songs[0]));
	}
};

module.exports = np;