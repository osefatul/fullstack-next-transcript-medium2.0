// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { sanityClient } from '../../../sanity-nextmedium/sanity';
import sanityClient from "@sanity/client";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "wo1mgf3s",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

  
export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {_id, name, email, comment} = JSON.parse (req.body);

  try {
    await client.create({})
  }

  res.status(200).json({ name: 'John Doe' })
}
