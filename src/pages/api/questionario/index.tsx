import { NextApiRequest, NextApiResponse } from "next";

import questoes from "../bancoDeQuestoes";

export default function Questionario(req: NextApiRequest, res: NextApiResponse) {

    res.status(200).json(questoes.map(questao => questao.id))
}