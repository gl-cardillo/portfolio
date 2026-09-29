import type { NextApiRequest, NextApiResponse } from "next";
import { getStore } from "@netlify/blobs";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const file = await getStore("cv").get("cv.pdf", { type: "arrayBuffer" });
    if (!file) return res.status(404).send("CV not found");

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="cv.pdf"');
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.send(Buffer.from(file));
  } catch {
    res.status(500).send("CV unavailable");
  }
}
