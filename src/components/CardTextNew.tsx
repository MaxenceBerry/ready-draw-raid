import React from "react";
import styles from "./GraveRobbersCards.module.css";

function CardTextNew() {
  return (
    <div className={styles.contour}>
      <div className={styles.greyBG}>
        <div className={styles.boxAlign}>
          <div className={styles.typeCard}>
            <p>Type</p>
          </div>
          <div className={styles.gritCard}>
            <p>Grit</p>
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
            <p>cost</p>
          </div>
          <div className={styles.nameCard}>
            <p>Name</p>
          </div>
        </div>
        <div className={styles.effectCard}>
          <p>info</p>
        </div>
        <div className={styles.bottomRectBlack}></div>
        <div className={styles.bottomCard}>
          <p>degradé</p>
        </div>
      </div>
      <div className={styles.blackVerticalRect}></div>
      <div className={styles.sideBarColor}></div>
    </div>
  );
}

export default CardTextNew;
