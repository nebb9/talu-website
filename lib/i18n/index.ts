import en from "./en";
import sr from "./sr";

export const dictionaries = {
  en,
  sr,
};

export type Locale = keyof typeof dictionaries;
