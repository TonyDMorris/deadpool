import React from "react";
import Player from "./player";
export default function Players({ players }) {
  return players.map((player) => {
    return <Player player={player} />;
  });
}
