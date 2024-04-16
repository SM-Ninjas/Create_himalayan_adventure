import { NextApiRequest, NextApiResponse } from "next";

export default function handlePlacesDetailsData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: "sushant babu prasai" });
}
