import type { BotEvent } from '../types/event.js';

const messageReactionAddEvent: BotEvent<'messageReactionAdd'> = {
  name: 'messageReactionAdd',
  async execute() {},
};

export default messageReactionAddEvent;
