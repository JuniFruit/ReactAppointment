import React from "react";
import { Tile } from "../tile/Tile"; 

export const TileList = ({items}) => {

  console.log(items)
  return (
    <div>
      {items.length ? items.map((item,index) => <Tile items={item} key={index}/>) : ''}
    </div>
  );
};
