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
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          mattis rutrum interdum. Pellentesque hendrerit eros id gravida
          malesuada. Proin ultricies orci ligula, eget sagittis dolor imperdiet
          laoreet. Quisque ac pulvinar erat. Donec ullamcorper posuere ex, sed
          rhoncus sem feugiat non. Nulla facilisi. Sed tristique aliquam rutrum.
          Suspendisse in mattis ligula, quis cursus eros. Praesent accumsan
          massa tortor, nec fermentum arcu porta sed. Etiam malesuada sodales
          tristique.{" "}
        </div>
        <DisplayCollection jsonToImport="legend"></DisplayCollection>
        <BDDManager jsonToImport="legend"></BDDManager>
      </div>
    </>
  );
}

export default MyCollection;
