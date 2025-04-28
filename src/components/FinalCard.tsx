import React, { ReactNode } from "react";
import styles from "./FinalCards.module.css";

interface GraveRobbersProps {
  children: ReactNode;
  imagePath: string;
  nameCard: string;
  gritCard: number;
  costCard: string;
  infoCard: string;
  typeCard: string;
}

function FinalCard({
  children,
  imagePath,
  nameCard,
  costCard,
  gritCard,
  infoCard,
  typeCard,
}: GraveRobbersProps) {
  return (
    <div className={styles.backgroundCard}>
      <div className={styles.boxAlign}>
        <div className={styles.typeCard}>
          <p>{typeCard}</p>
        </div>
        <div className={styles.gritCard}>
          <p>{gritCard}</p>
        </div>
      </div>
      <div className={styles.imgCardContainer}>
        <img src={imagePath} className={styles.imgCard} alt={nameCard} />
      </div>
      <div className={styles.boxAlign}>
        <div className={styles.costCard}>
          <p>{costCard}</p>
        </div>
        <div className={styles.nameCard}>
          <p>{nameCard}</p>
        </div>
      </div>
      <div className={styles.effectCard}>
        <p>{children}</p>
      </div>
      <div className={styles.bottomCard}>
        <p>{infoCard}</p>
      </div>
    </div>
  );
}

export default FinalCard;
