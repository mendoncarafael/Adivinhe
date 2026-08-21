import logo from "../../assets/logo.png";
import styles from "./styles.module.css";
import { RefreshCCWIcon } from "../Icons/Refresh";

type Props = {
  current: number;
  max: number;
  onRestart: () => void;
};

export function Header({ current, max, onRestart }: Props) {
  return (
    <div className={styles.container}>
      <img src={logo} alt="" />

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button type="button" onClick={onRestart}>
          <RefreshCCWIcon />
        </button>
      </header>
    </div>
  );
}
