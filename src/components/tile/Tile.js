import React from "react";

export const Tile = ({items}) => {
  const arr = Object.values(items)
  return (
    <div className="tile-container">
      {items ? arr.map((item, index) => {
        return <p className={index === 0 ? 'tile-title' : 'tile'}>{item}</p>
      }) : ''}
    </div>
  );
};
