import { NextApiRequest, NextApiResponse } from 'next'
import stream from 'stream'
import { promisify } from 'util'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
  }
}
