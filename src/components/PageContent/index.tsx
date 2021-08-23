import axios from "axios";
import React, { useEffect, useState } from "react";
import seedColor from "seed-color";
import { v4 as uuid } from "uuid";
import type { GodResponse, User } from "../../types/type";
import { Canvas } from "../Canvas";
import { Container } from "../Container";
import { Description } from "../Description";
import { UserInfo } from "../UserInfo";

const readUser = (): User | undefined => {
  const user = sessionStorage.getItem("user");
  return user != null ? JSON.parse(user) : undefined;
};

export const PageContent = () => {
  const [userColor, setUserColor] = useState<string>("");
  const [colors, setColors] = useState<{ canvas: string[][]; times: number }>({
    canvas: [],
    times: 0,
  });

  useEffect(() => {
    const user = readUser();
    if (user) {
      setUserColor(seedColor(user.id).toHex());
    } else {
      const id = uuid();
      sessionStorage.setItem("user", JSON.stringify({ id }));
      setUserColor(seedColor(id).toHex());
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (userColor) {
        const body = {
          color: userColor,
          x: Math.floor(Math.random() * 128),
          y: Math.floor(Math.random() * 128),
        };
        try {
          await axios
            .post("api/god", { body })
            .then((response) => response.data)
            .then((result: GodResponse) => {
              console.log(result);
              setColors(result);
            });
        } catch (err) {
          console.log(err.response.status);
        }
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
              All users played <span className="font-bold">{colors.times} times</span>
            </p>
          </div>
          <Description />
        </>
      )}
    </Container>
  );
};
