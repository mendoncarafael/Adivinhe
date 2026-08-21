import styles from "./styles.module.css";
import { Letters } from "../Letters";

export type LetterUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LetterUsedProps[];
};

export function LettersUsed({ data }: Props) {
  return (
    <div className={styles.container}>
      <h5>Letras Utilizadas</h5>

      <div className={styles.lettersUsed}>
        {data.map(({ value, correct }) => (
          <Letters
            key={value}
            value={value}
            size="small"
            color={correct ? "correct" : "wrong"}
          />
        ))}
      </div>
    </div>
  );
}
