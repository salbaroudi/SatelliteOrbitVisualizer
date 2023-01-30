//A function to get data from store
import React, { useState } from 'react';
import EarthImg from "../em-watercolor-earth.jpg";
import { useAppSelector, useAppDispatch } from '../../app/hooks';

//All of our actions and reducers bundled in a slice module.
//We import them together, regardless of type/usage.
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectVisibility,
  toggleVisibility,
  getAngle,
  rotateCW45,
} from './counterSlice';
import styles from './Counter.module.css';

//Again, a component is a function with some re-render functionality.
//that pumps out TSX
export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  //Set to zero if not defined, or NAN.
  //test webpack
  const incrementValue = Number(incrementAmount) || 0;

//Images are displayed by importing them, webpack generates the build code later.
//https://betterprogramming.pub/how-to-display-images-in-react-dfe22a66d5e7

//Both of the modifications just reload CSS for the Earth Image.
//For the first, we toggle visibility.
let imgVisCSS;
if (useAppSelector(selectVisibility) == "visible") {
  imgVisCSS = styles.earthImgVisibile;
} else {
  imgVisCSS = styles.earthImgHidden;
}

//Next we get our current angle, and get ready to rotate our image.
let angle = useAppSelector(getAngle) % 360;

const imgStyle = {
  transform: "rotate(" + angle + "deg)",
};

//For the second, we use custom rotation tags for the image.

  return (
    <div>
      <div className={styles.row}>
        <img className={imgVisCSS} style={imgStyle} src={EarthImg} alt="The Earth" height={750} width={750} />
      </div>
      <div className={styles.row}>

          <button
              className={styles.button}
              onClick={() => dispatch(toggleVisibility())}
            >
              Toggle Earth Image
            </button>
            <button
              className={styles.button}
              onClick={() => dispatch(rotateCW45())}
            >
              Rotate 45 Degrees
            </button>
      </div>

      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
