import { Input } from "./components/Input";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letters } from "./components/Letters";
import { Button } from "./components/Button";
import { LettersUsed, type LetterUsedProps } from "./components/LettersUsed";
import { WORDS, type Challenge } from "./utils/words";
import styles from "./app.module.css";
import { useEffect, useState } from "react";

export function App() {
  const [score, setScores] = useState(0);
  const [letter, setLetter] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [lettersUsed, setLettersUsed] = useState<LetterUsedProps[]>([]);
  const [challange, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    startGame();
  }

  function handleConfirm() {
    if (!challange) {
      return;
    }

    if (!letter.trim()) {
      alert("Digite algo");
    }

    const value = letter.toUpperCase();
    const exist = lettersUsed.find(
      (used) => used.value.toUpperCase() === value,
    );

    if (exist) {
      return alert("Letra ja utilizada");
    }

    const hits = challange.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLettersUsed((prevState) => [...prevState, { value, correct }]);
    setScores(currentScore);
    setLetter("");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);
    setScores(0);
    setLetter("");
    setLettersUsed([]);
  }

  useEffect(() => {
    startGame();
  }, []);

  if (!challange) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={score} max={10} onRestart={handleRestartGame} />
        <Tip tip={challange.tip} />
        <div className={styles.word}>
          {challange.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase(),
            );
            return <Letters key={index} value={letterUsed?.value} />;
          })}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <hr className={styles.line} />

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
