import React from "react";
import classes from "./Circle.module.css";

export const Circle: React.VFC = () => {
  return (
    <div className={`${classes.fading}`}>
      <div className={`${classes.circle} ${classes.circle}`}></div>
      <div className={`${classes.circle} ${classes.circle2}`}></div>
      <div className={`${classes.circle} ${classes.circle3}`}></div>
      <div className={`${classes.circle} ${classes.circle4}`}></div>
      <div className={`${classes.circle} ${classes.circle5}`}></div>
      <div className={`${classes.circle} ${classes.circle6}`}></div>
      <div className={`${classes.circle} ${classes.circle7}`}></div>
      <div className={`${classes.circle} ${classes.circle8}`}></div>
      <div className={`${classes.circle} ${classes.circle9}`}></div>
      <div className={`${classes.circle} ${classes.circle10}`}></div>
      <div className={`${classes.circle} ${classes.circle11}`}></div>
      <div className={`${classes.circle} ${classes.circle12}`}></div>
    </div>
  );
};
