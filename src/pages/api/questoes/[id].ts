import type { NextApiRequest, NextApiResponse } from 'next'

export default function Questoes(req: NextApiRequest, res: NextApiResponse ) {
  res.status(200).json({id: req.query.id, name: 'John'})
}