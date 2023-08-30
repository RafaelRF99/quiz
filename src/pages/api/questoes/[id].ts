import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bandoDeQuestoes'

export default function Questoes(req: NextApiRequest, res: NextApiResponse ) {
    res.status(200).json(questoes[0].transformarObjeto())
}