import { clsx } from "clsx";
import type { JSX } from "react";
import type { Languages } from "../utils/languages";
import type React from "react";

type LanguageChips = {
  languages: Languages[];
  wrongGuessCount: number;
};

export default function LanguageChips({
  languages,
  wrongGuessCount,
}: LanguageChips): JSX.Element {
  const languageElements: JSX.Element[] = languages.map(
    (lang: Languages, index: number): JSX.Element => {
      const isLanguageLost: boolean = index < wrongGuessCount;
      const styles: React.CSSProperties = {
        backgroundColor: lang.backgroundColor,
        color: lang.color,
      };
      const className: string = clsx("chip", isLanguageLost && "lost");
      return (
        <span className={className} style={styles} key={lang.name}>
          {lang.name}
        </span>
      );
    }
  );

  return <section className="language-chips">{languageElements}</section>;
}
