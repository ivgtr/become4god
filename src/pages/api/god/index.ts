import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { GodResponse } from "../../../types/type";

const handler = async (req: NextApiRequest, res: NextApiResponse<GodResponse>) => {
  try {
    if (req.method === "POST") {
      const data = await prisma.info.findUnique({
        where: { id: 1 },
        include: {
          canvas: {
            select: {
              dots: true,
            },
          },
        },
      });
      res.status(200);
      res.setHeader("Cache-Control", "public, max-age=86400");
      res.end(
        JSON.stringify({
          canvas: data?.canvas.map((canvas) => canvas.dots),
          times: data?.times ?? 0,
        })
      );
    } else {
      res.status(500);
      res.end();
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
    res.status(500);
    res.end();
  }
};

export default handler;
