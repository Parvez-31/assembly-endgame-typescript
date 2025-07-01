import { words } from "./words";

function getRandomIndex(max: number): number {
  return Math.floor(Math.random() * max);
}

export function getRandomWord(): string {
  const randomIndex: number = getRandomIndex(words.length);
  return words[randomIndex];
}

export function getFarewellText(language: string): string {
  const options: string[] = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
  ];

  const randomIndex: number = getRandomIndex(options.length);
  return options[randomIndex];
}
