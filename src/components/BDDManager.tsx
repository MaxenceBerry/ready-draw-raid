import React from "react";

import GravRobJSON from "../assets/GravRob.json";
// site pour convertir csv en json https://csvjson.com/csv2json

interface bddManagerProps {
  jsonToImport: "legend" | "treasure";
}

// retourne un tableau avec les données d'un JSON
function BDDManager({ jsonToImport }: bddManagerProps) {
  if (jsonToImport === "legend") {
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Cost</th>
              <th scope="col">Grit</th>
              <th scope="col">Effect</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {GravRobJSON.map((legend) => {
              return (
                <tr>
                  <th scope="row">{legend.num}</th>
                  <td>{legend.name}</td>
                  <td>{legend.cost}</td>
                  <td>{legend.grit}</td>
                  <td>{legend.effect}</td>
                  <td>{legend.summary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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

export default BDDManager;
