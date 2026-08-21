import styles from "./styles.module.css";
import tipIMG from "../../assets/tip.svg";
import { BellIcon } from "../Icons/Bell";
type Props = {
  tip: string;
};

export function Tip({ tip }: Props) {
  return (
    <div className={styles.container}>
      {/* <img src={tipIMG} alt="dica"></img> */}
      <BellIcon className="tipIcon" />

      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  );
}
