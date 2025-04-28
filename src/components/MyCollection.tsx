import React from "react";
import BDDManager from "./BDDManager";
import DisplayCollection from "./DisplayCollection";

function MyCollection() {
  return (
    <>
      <div className="container">
        <h1>My Collection</h1>
        <button
          type="button"
          onClick={() => console.log("test")}
          className="btn btn-warning"
        >
          Load Collection
        </button>
        <div></div>
        <DisplayCollection jsonToImport="legend"></DisplayCollection>
        <BDDManager jsonToImport="legend"></BDDManager>
      </div>
    </>
  );
}

export default MyCollection;
