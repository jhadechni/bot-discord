import type { BotEvent } from '../types/event.js';

const messageReactionRemoveEvent: BotEvent<'messageReactionRemove'> = {
  name: 'messageReactionRemove',
  async execute() {},
};

export default messageReactionRemoveEvent;
