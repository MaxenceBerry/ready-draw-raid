import React from "react";
import GraveRobbers from "./GraveRobbers";
import SpinBox from "./SpinBox";

import GravRobJSON from "../assets/GravRob.json";

interface bddManagerProps {
  jsonToImport: "legend" | "treasure";
}

// Prend en argument un JSON et les mets dans des cartes
function DisplayCollection({ jsonToImport }: bddManagerProps) {
  if (jsonToImport === "legend") {
    return (
      <>
        <div className="row">
          {GravRobJSON.map((legend) => {
            // const pathImageCurrent = {"images/Pancho_villa_horseback.jpg", {legend.illustration}}
            const pathImageCurrent = `images/${legend.illustration}`;
            return (
              <div className="col-sm-6 col-md-3 ratio-4x3">
                <div className="row">
                  <div className="col-sm-12">
                    <GraveRobbers
                      imagePath={pathImageCurrent}
                      nameCard={legend.name}
                      costCard={legend.cost}
                      gritCard={legend.grit}
                      infoCard={legend.summary}
                    >
                      {legend.effect}
                    </GraveRobbers>
                  </div>
                  <SpinBox></SpinBox>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else if (jsonToImport === "treasure") {
    return (
      <>
        <div> treasure TODO</div>
      </>
    );
  }
}

export default DisplayCollection;
