import { fromRGB } from "everycolor";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const toRGB = (hex: string) => {
  if (hex.slice(0, 1) == "#") hex = hex.slice(1);
  if (hex.length == 3)
    hex =
      hex.slice(0, 1) +
      hex.slice(0, 1) +
      hex.slice(1, 2) +
      hex.slice(1, 2) +
      hex.slice(2, 3) +
      hex.slice(2, 3);

  return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) => parseInt(str, 16));
};

export const UserInfo: React.VFC<{ color: string }> = ({ color }) => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (!color) return;

    const [r, g, b] = toRGB(color);
    setUserName(fromRGB(r, g, b));
  }, [color]);

  const style = {
    color,
  };

  return (
    <div className="max-w-3xl mt-8 mx-auto text-left">
      {userName && (
        <p className="break-words">
          Your color is{" "}
          <CopyToClipboard text={color}>
            <span className="font-bold cursor-pointer" style={style}>
              {userName}
            </span>
          </CopyToClipboard>
          .
        </p>
      )}
    </div>
  );
};
