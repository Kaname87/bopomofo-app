import React, { useEffect, useMemo } from "react";
// import
import styles from "./Main.module.scss";
type po = {
  handleKeyDown: any;
  // top: number;
  left: number;
  children: any;
};

const setStyle = (left: number): {} => {
  // console.log(";eft", left);
  return {
    // width: dim,
    // height: dim,
    // backgroundColor: "blue",
    // #'color',
    // padding: 0,
    // marging: 0,
    position: "absolute",
    lineHeight: "100px",
    border: "1px solid #ccc",
    posiTion: "absolute",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItem: "center",
    left: left + "px",
    transition: "all 0.2s ease"
  };
};

const Player = ({ left, handleKeyDown, children }: po) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  const memoizedStyle = useMemo(() => setStyle(left), [left]);
  return <div style={memoizedStyle}>{children}</div>;
};

export default Player;
