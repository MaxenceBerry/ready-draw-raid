import React, { ReactNode } from "react";
import styles from "./GraveRobbersCards.module.css";
interface GraveRobbersProps {
  children: ReactNode;
  imagePath: string;
  nameCard: string;
  gritCard: number;
  costCard: string;
  infoCard: string;
}
function GraveRobbers({
  children,
  imagePath,
  nameCard,
  costCard,
  gritCard,
  infoCard,
}: GraveRobbersProps) {
  return (
    <>
      <div
        className="card border-warning border"
        style={{ width: "33ppx", height: "44ppx" }}
      >
        <div className="row">
          <div className="col-1 text-center bg-primary text-white border-white border">
            {costCard}
          </div>
          <div className="col-10 text-center card-title bg-secondary">
            {nameCard}
          </div>
          <div className="col-1 text-center bg-danger text-white border-white border">
            {gritCard}
          </div>
        </div>

        <img
          className="card-img-top img-thumbnail"
          src={imagePath}
          alt={nameCard}
          style={{ width: "33ppx", height: "44ppx" }}
        />
        <div className="card-body">
          <div className="p-3 mb-2 card-text text-white text-wrap bg-secondary">
            {children}
          </div>
        </div>
        <p className="text-secondary text-normal text-small text-wrap">
          {infoCard}
        </p>
      </div>
    </>
  );
}

export default GraveRobbers;
