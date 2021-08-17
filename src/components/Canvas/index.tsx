import React, { useEffect, useState, useRef } from "react";
import { Circle } from "../Circle";
import classes from "./Canvas.module.css";

export const Canvas: React.VFC<{ colors: string[][] }> = (props) => {
  const [colors, setColors] = useState<string[][]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setColors(props.colors);
  }, [props.colors]);

  useEffect(() => {
    if (!colors.length) return;

    const wrapperElement = wrapperRef.current;
    if (!wrapperElement) return;
    const sr =
      wrapperElement.shadowRoot ||
      wrapperElement.attachShadow({
        mode: "open",
      });
    while (sr.firstChild) {
      sr.firstChild.remove();
    }

    const maxColorValue = colors.length;
    const size = 100 / maxColorValue;

    const df = document.createDocumentFragment();
    const spacer = document.createElement("div");
    spacer.style.width = "100%";
    spacer.style.height = "100%";
    spacer.style.left = "0";
    spacer.style.top = "0";
    spacer.style.margin = "0 auto";
    spacer.style.position = "absolute";
    df.append(spacer);

    const cell = document.createElement("div");
    cell.style.position = "absolute";
    cell.style.left = "0";
    cell.style.top = "0";
    cell.style.width = `${size * 0.9}%`;
    cell.style.height = `${size * 0.9}%`;
    cell.style.overflow = "hidden";
    // @ts-expect-error
    cell.style.contain = "size layout paint";

    colors.map((item, index) => {
      cell.style.top = `${size * index}%`;

      item.map((color, index) => {
        cell.style.left = `${size * index}%`;
        cell.style.backgroundColor = color;
        const c = cell.cloneNode(false);
        spacer.append(c);
      });
    });
    sr.append(df);
  }, [colors]);

  return (
    <>
      <div
        className={`relative mx-auto p-1 bg-white grid items-center justify-center overflow-hidden ${classes.wrap}`}
        ref={wrapperRef}
      >
        {!colors.length && <Circle />}
      </div>
    </>
  );
};
