type Greeter = (name: string) => string;

export const englishGreeter: Greeter = (name) => `Hello ${name}`;

export const excitedGreeter: Greeter = (name) =>
  `Wow ${name}! Nice to meet you :) !!`;

export const racistFrenchGreeter: Greeter = (name) =>
  `Bonjour ${name}! Je suis Français mon amis`;
