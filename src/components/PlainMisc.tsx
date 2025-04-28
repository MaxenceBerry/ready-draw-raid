import React from "react";

const PlainMisc = () => {
  return (
    <>
      <h2>Idées</h2>
      <p>
        On veut un jeu de cartes où des cowboys cherchent des trésors et peuvent
        se les piquer avant d'empocher la récompense. On a donc des cartes qu'on
        doit poser mais l'adversaire peut les retourner et soit les piquer soit
        activer un effet terrible.
      </p>
      <p>
        Les cartes doivent être posées pour marquer des points. Où alors elles
        doivent être posées pour qu'on puisse activer leur effet. J'aime que
        dans certains jeux, on puisse défausser des cartes pour avoir des
        boosts. On peut imaginer que ses boost sont meilleurs si on place des
        cartes qui rapportent gros. Ou alors que ces cartes produisent plus de
        ressources si elles sont posées.
      </p>
      <p>
        {" "}
        A quoi ressemble un tour de jeu ? On joue des cartes de sa main. J'aime
        le fait qu'on ait un barillet avec des balles dedans qui et qu'on passe
        notre temps à changer les balles de notre révolver pour le moment où on
        voudra tirer. Pour récupérer des cartes on doit dégainer une carte de
        son barillet. On augmente ainsi ses chances de faire un gros score mais
        de se faire voler.
      </p>
      <p>
        Ok idée de génie. On a 2 types de cartes : les personnages et les
        artefacts. Les personnages servent à récupérer des artefacts et les
        artefacts boost aléatoirement
      </p>
      <p>
        Etapes d'un tour :
        <ol>
          <li>On pioche une carte</li>
          <li>On remet un artéfact dans le barillet</li>
          <li>On pose face cachée le personnage qu'on envoie à l'aventure</li>
          <li>On retourne le personnage</li>
          <li>On pioche un boost dans le barillet </li>
          <li>On résout les effets</li>
          <li>Le gagnant récupère l'artéfact</li>
        </ol>
      </p>
      <p>
        Au final, pendant son tour, on a 2 points d'action. on peut
        <ul>
          <li>Piocher une carte</li>
          <li>
            Changer son barillet (regarder ses cartes, en jeter une et en
            rajouter une nouvelle aléatoire (ou pas aléatoire mais plutot
            aléatoire quand meme))
          </li>
          <li>Jouer une carte (peut couter 0, 1 ou 2 points d'actions). La </li>
          <li>Attaquer l'endroit où une carte est posée.</li>
          <li>On pioche un boost dans le barillet </li>
          <li>On résout les effets</li>
          <li>Le gagnant récupère l'artéfact</li>
        </ul>
      </p>
    </>
  );
};

export default PlainMisc;
