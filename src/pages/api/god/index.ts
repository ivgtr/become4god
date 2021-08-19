import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { GodResponse } from "../../../types/type";

const handler = async (req: NextApiRequest, res: NextApiResponse<GodResponse>) => {
  try {
    if (req.method === "POST") {
      const { count } = await prisma.info.update({
        where: { id: 1 },
        data: { count: { increment: 1 } },
      });

      res.status(200);
      // res.setHeader("Content-Type", `image/${option.type}`);
      res.setHeader("Cache-Control", "public, max-age=86400");
      res.end(JSON.stringify({ canvas: [], count }));
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
