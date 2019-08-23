import React, { useState } from "react";
// import styles from "./Main.module.scss";
import useInterval from "../utils/useInterval";
// import KeyboardsN from "./KeyboardsN";
import Square from "./Square";
import Player from "./Player";

import XiaoLongBao from "./SVG/XiaoLongBao";
// import ShiroNeko from "./SVG/ShiroNeko";
// import KuroNeko from "./SVG/KuroNeko";
import ZhengLong from "./SVG/ZhengLong";

// import Bullet from "./Bullet";

import Board from "./Board";

import AttackGameContext from "../context/attackGameContext";

const AttackGame = () => {
  const [count, setCount] = useState(0);
  // const [position1, setPosition1] = useState({ top: 0, left: 20 });
  // const [attack, doAttack] = useState({ top: 0, left: 20, color: "black" });
  // const [position2, setPosition2] = useState({ top: 0, left: 40 });
  // const [position3, setPosition3] = useState({ top: 0, left: 60 });
  // const [position4, setPosition4] = useState({ top: 0, left: 0 });

  const [posi, setPosi] = useState({ left: 4 });
  // const handleKeyDown = (e: any) => {
  //   console.log(e.key, posi, "=====");
  //   const moveSpeed = 1;

  //   switch (e.key) {
  //     case "Right": // IE/Edge specific value
  //     case "ArrowRight":
  //       setPosi(prevPosi => {
  //         return {
  //           left:
  //             prevPosi.left + moveSpeed < 9
  //               ? prevPosi.left + moveSpeed
  //               : prevPosi.left
  //         };
  //       });
  //       break;
  //     case "Left": // IE/Edge specific value
  //     case "ArrowLeft":
  //       setPosi(prevPosi => ({
  //         left:
  //           prevPosi.left - moveSpeed > 0
  //             ? prevPosi.left - moveSpeed
  //             : prevPosi.left
  //       }));
  //       break;
  //     default:
  //       return;
  //   }
  //   // setPosi(newDirection);
  //   // console.log();
  // };

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  const attackGameContext: any = {
    // attack,
    posi
    // handleKeyDown
  };
  console.log("p", posi);
  return (
    <AttackGameContext.Provider value={attackGameContext}>
      <div>
        {count}
        <Board playerP={posi.left} />

        {/* <Square top={position1.top} left={position1.left}>
          <XiaoLongBao width={20} height={20} />
        </Square> */}
        {/* <Square top={position2.top} left={position2.left}>
          <ShiroNeko width={21} height={21} fill="#000" />
        </Square>
        <Square top={position3.top} left={position3.left}>
          <KuroNeko width={25} height={25} fill="#000" />
        </Square> */}

        {/* <Square top={position2.top} left={position2.left} word="ㄇ" /> */}

        {/* <XiaoLongBao width={20} height={20} />
        <XiaoLongBao width={20} height={20} /> */}
        {/* //<XiaoLongBao width={20} height={20} /> */}

        {/* <Bullet top={attack.top} left={attack.left} color={attack.color} /> */}
        {/* <div
          style={{
            display: "flex",
            position: "relative",
            top: 200,
            justifyContent: "center"
          }}
        > */}
        {/* <Player left={posi.left} handleKeyDown={handleKeyDown}>
            <ZhengLong width={30} height={30} />
          </Player> */}
        {/* <ZhengLong width={100} height={100} /> */}
        {/* </div> */}
        {/* <div style={{ display: "flex" }}> */}
        {/* <KeyboardsN left={0} /> */}
        {/* <KeyboardsN left={10} /> */}
        {/* </div> */}
      </div>
    </AttackGameContext.Provider>
  );
};

export default AttackGame;
