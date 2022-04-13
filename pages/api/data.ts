import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../Types/Types'
import { skills } from '../../components/data/data.js'

export default function data(
  
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ ...skills })
}
