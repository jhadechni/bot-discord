import type { BotEvent } from '../types/event.js';
import { updateSuggestionVotes } from '../utils/suggestion-ui.js';
import { logger } from '../core/logger.js';

const messageReactionAddEvent: BotEvent<'messageReactionAdd'> = {
  name: 'messageReactionAdd',
  async execute(reaction, user) {
    if (user.bot) return;
    if (!['👍', '👎'].includes(reaction.emoji.name ?? '')) return;

    try {
      const r = reaction.partial ? await reaction.fetch() : reaction;
      const msg = r.message.partial ? await r.message.fetch() : r.message;
      await updateSuggestionVotes(msg);
    } catch (err) {
      logger.warn({ err }, 'Error actualizando votos (add)');
    }
  },
};

export default messageReactionAddEvent;
