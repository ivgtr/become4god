import FingerprintJS from "@fingerprintjs/fingerprintjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import seedColor from "seed-color";
import { Canvas } from "../Canvas";
import { Container } from "../Container";
import { Description } from "../Description";
import { UserInfo } from "../UserInfo";

export const PageContent = () => {
  const [userColor, setUserColor] = useState<string>("");
  const [colors, setColors] = useState<{ canvas: string[][]; count: number }>({
    canvas: [],
    count: 0,
  });
  const url = process.env.DB_HOST as string;

  useEffect(() => {
    (async () => {
      const result = await FingerprintJS.load().then((fp) => fp.get());

      setUserColor(seedColor(result.visitorId).toHex());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (userColor) {
        const body = {
          color: userColor,
          x: Math.floor(Math.random() * 128),
          y: Math.floor(Math.random() * 128),
        };

        await axios
          .post(`${url}/canvas`, { body })
          .then((response) => response.data)
          .then((result: { canvas: string[][]; count: number }) => {
            setColors(result);
          });
      }
    })();
  }, [userColor]);

  return (
    <Container>
      {userColor && (
        <>
          <UserInfo color={userColor} />
          <main className="my-8">
            <Canvas colors={colors.canvas} />
          </main>
          <div className="text-center">
            <p>
              All users played <span className="font-bold">{colors.count} times</span>
            </p>
          </div>
          <Description />
        </>
      )}
    </Container>
  );
};
