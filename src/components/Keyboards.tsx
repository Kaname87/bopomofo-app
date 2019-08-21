import React from "react";
import styles from "./Main.module.scss";

const Keyboard = () => (
  <div>
    <div className={styles.Keyboard}>
      <div className={styles.frm}>
        <div className={styles.sups}>~</div>
        <input type="button" className={styles.kb} value="" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>1</div>
        <input type="button" className={styles.kb} value="ㄅ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>2</div>
        <input type="button" className={styles.kb} value="ㄉ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>3</div>
        <input type="button" className={styles.kb} value="ˇ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>4</div>
        <input type="button" className={styles.kb} value="ˋ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>5</div>
        <input type="button" className={styles.kb} value="ㄓ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>6</div>
        <input type="button" className={styles.kb} value="ˊ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>7</div>
        <input type="button" className={styles.kb} value="˙" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>8</div>
        <input type="button" className={styles.kb} value="ㄚ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>9</div>
        <input type="button" className={styles.kb} value="ㄞ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>0</div>
        <input type="button" className={styles.kb} value="ㄢ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>-</div>
        <input type="button" className={styles.kb} value="ㄦ" />
      </div>
      <div className={styles.frm}>
        <div className={styles.sups}>=</div>
        <input type="button" className={styles.kb} value="" />
      </div>
      <input
        type="button"
        className={styles.kb}
        id="backspace"
        value="Backspace"
      />
      <div />
    </div>
    <input type="button" className={styles.kb} id="tab" value="Tab" />
    <div className={styles.frm}>
      <div className={styles.sups}>Q</div>
      <input type="button" className={styles.kb} value="ㄆ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>W</div>
      <input type="button" className={styles.kb} value="ㄊ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>E</div>
      <input type="button" className={styles.kb} value="ㄍ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>R</div>
      <input type="button" className={styles.kb} value="ㄐ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>T</div>
      <input type="button" className={styles.kb} value="ㄔ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>Y</div>
      <input type="button" className={styles.kb} value="ㄗ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>U</div>
      <input type="button" className={styles.kb} value="ㄧ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>I</div>
      <input type="button" className={styles.kb} value="ㄛ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>O</div>
      <input type="button" className={styles.kb} value="ㄟ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>P</div>
      <input type="button" className={styles.kb} value="ㄣ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>[</div>
      <input type="button" className={styles.kb} value="" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>]</div>
      <input type="button" className={styles.kb} value="" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>\</div>
      <input type="button" className={styles.kb} value="" />
    </div>

    <input type="button" className={styles.kb} id="caps" value="Caps Lock" />
    <div className={styles.frm}>
      <div className={styles.sups}>A</div>
      <input type="button" className={styles.kb} value="ㄇ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>S</div>
      <input type="button" className={styles.kb} value="ㄋ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>D</div>
      <input type="button" className={styles.kb} value="ㄎ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>F</div>
      <input type="button" className={styles.kb} value="ㄑ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>G</div>
      <input type="button" className={styles.kb} value="ㄕ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>H</div>
      <input type="button" className={styles.kb} value="ㄘ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>J</div>
      <input type="button" className={styles.kb} value="ㄨ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>K</div>
      <input type="button" className={styles.kb} value="ㄜ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>L</div>
      <input type="button" className={styles.kb} value="ㄠ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>;</div>
      <input type="button" className={styles.kb} value="ㄤ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>'</div>
      <input type="button" className={styles.kb} value="" />
    </div>
    <input type="button" className={styles.kb} id="enter" value="Enter" />

    <input type="button" className={styles.kb} id="shift_left" value="Shift" />
    <div className={styles.frm}>
      <div className={styles.sups}>Z</div>
      <input type="button" className={styles.kb} value="ㄈ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>X</div>
      <input type="button" className={styles.kb} value="ㄌ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>C</div>
      <input type="button" className={styles.kb} value="ㄏ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>V</div>
      <input type="button" className={styles.kb} value="ㄒ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>B</div>
      <input type="button" className={styles.kb} value="ㄖ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>N</div>
      <input type="button" className={styles.kb} value="ㄙ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>M</div>
      <input type="button" className={styles.kb} value="ㄩ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>,</div>
      <input type="button" className={styles.kb} value="ㄝ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>.</div>
      <input type="button" className={styles.kb} value="ㄡ" />
    </div>
    <div className={styles.frm}>
      <div className={styles.sups}>/</div>
      <input type="button" className={styles.kb} value="ㄥ" />
    </div>
  </div>
);

export default Keyboard;
