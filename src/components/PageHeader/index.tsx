import React from "react";
import classes from "./PageHeader.module.css";

export const PageHeader = () => (
  <>
    <header className="text-center">
      <h1 className={`inline-block my-12 ${classes.wrap}`}>
        <span className={`font-black text-4xl ${classes.title}`}>No titlé</span>
      </h1>
    </header>
  </>
);
