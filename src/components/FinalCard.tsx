import React from "react";
import styles from "./FinalCards.module.css";

function FinalCard() {
  return (
    <div className={styles.backgroundCard}>
      <div className={styles.boxAlign}>
        <div className={styles.typeCard}>
          <p>Type</p>
        </div>
        <div className={styles.gritCard}>
          <p>9</p>
        </div>
      </div>
      <div className={styles.imgCardContainer}>
        <img
          src="./images/billy-the-kid.jpg"
          className={styles.imgCard}
          alt="..."
        />
      </div>
      <div className={styles.boxAlign}>
        <div className={styles.costCard}>
          <p>I</p>
        </div>
        <div className={styles.nameCard}>
          <p>Name</p>
        </div>
      </div>
      <div className={styles.effectCard}>
        <p>
          longtgemps je me suis couché de bonne heure. Je ne pensais aps que je
          pouvais te faire tant de mal
        </p>
      </div>
      <div className={styles.bottomCard}>
        <p>
          A complex figure who was a businessman, gambler, and lawman, most
          famously involved in the Gunfight at the O.K. Corral.
        </p>
      </div>
    </div>
  );
}

export default FinalCard;
