import React, { useMemo } from "react";

import XiaoLongBao from "./SVG/XiaoLongBao";
import styles from "./Main.module.scss";
type po = {
  top: number;
  left: number;
  color?: string;
};

const setStyle = (top: number, left: number): {} => {
  // const dim = 12 + "px";
  console.log(top, left);
  const newTop = 200 + top;

  return {
    // width: dim,
    // height: dim,
    // backgroundColor: "blue",
    // #'color',
    // padding: 0,
    // marging: 0,
    // lineHeight: "100px",
    border: "1px solid #ccc",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItem: "center",
    // top: 250 + top + "px",
    top: newTop + "px",
    left: left + "px",
    transition: "all 0.2s ease"
  };
};

const Bullet = ({ top, left, color = "black" }: po) => {
  const memoizedStyle = useMemo(() => setStyle(top, left), [top, left, color]);
  // useEffect(() => {
  //   // console.log(p);
  //   setStyle(props.attack);
  // }, [props.attack]);
  return (
    <div style={memoizedStyle}>
      <XiaoLongBao width={20} height={20} fill={color} />B
    </div>
  );
};

export default Bullet;
