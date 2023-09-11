import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

export default function Questoes(req: NextApiRequest, res: NextApiResponse ) {
    const { id } = req.query

    if (id) {
        const unicaQuestaoOuNada = questoes.filter(questao => questao.id === +id)

    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0]
        res.status(200).json(questaoSelecionada.transformarObjeto())
    } else {
        res.status(204).send('Sem conteúdo!')
    }
    } else {
        res.status(400).send('ID inválido')
    }
}
