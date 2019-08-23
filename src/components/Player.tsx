import React, { useEffect, useMemo, useContext } from "react";
// import
import styles from "./Main.module.scss";
import AttackGameContext from "../context/attackGameContext";

type po = {
  handleKeyDown?: any;
  // top: number;
  left: number;
  children: any;
};

const setStyle = (left: number): {} => {
  // console.log(";eft", left);
  // return {}
  return {
    // width: dim,
    // height: dim,
    // backgroundColor: "blue",
    // #'color',
    padding: 0,
    marging: 0,
    position: "absolute",
    lineHeight: "100px",
    border: "1px solid #ccc",
    posiTion: "absolute",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItem: "center",
    // left: left + "px",
    transition: "all 0.2s ease"
  };
};

const Player = ({ left, children }: po) => {
  const { handleKeyDown } = useContext<any>(AttackGameContext);
  // console.log("e", handleKeyDown);
  useEffect(() => {
    console.log("eeeee");
    window.addEventListener("keydown", handleKeyDown);
    // window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // window.removeEventListener('keyup', upHandler);
    };
  }, [handleKeyDown]); // Empty array ensures that effect is only run on mount and unmount
  // const memoizedStyle = useMemo(() => setStyle(left), [left]);

  return <div>{children}</div>;
};

export default Player;
