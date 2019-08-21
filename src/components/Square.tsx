import React from "react";
import XiaoLongBao from "./SVG/XiaoLongBao";
import styles from "./Main.module.scss";
type po = {
  top: number;
  left: number;
  children: any;
};

const setStyle = ({ top, left }: po): {} => {
  // const dim = 12 + "px";
  return {
    // width: dim,
    // height: dim,
    // backgroundColor: "blue",
    // #'color',
    // padding: 0,
    // marging: 0,
    // width: "10px",
    lineHeight: "100px",
    border: "1px solid #ccc",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItem: "center",
    top: top + "px",
    left: left + "px",
    transition: "all 0.2s ease"
  };
};

const Sqaure = (props: po) => (
  <div style={setStyle(props)}>
    {props.children}
    {/* <div className={styles.target}>{props.word}</div> */}
  </div>
);

export default Sqaure;

// const style = ({ size, position, color }) => {
//     const dim = size + 'px';
//     return {
//         width: dim,
//         height: dim,
//         backgroundColor: color,
//         position: 'absolute',
//         top: position.top + 'px',
//         left: position.left + 'px',
//         transition: 'all 0.1s ease'
//     };
// };

// export default (props) => <div style={style(props)}/>
