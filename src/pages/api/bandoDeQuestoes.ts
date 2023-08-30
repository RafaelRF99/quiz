import IQuestao from "../../../model/questao";
import IResposta from "../../../model/resposta";

const questoes: IQuestao[] = [
    new IQuestao(200, 'Pergunta número 1', [
        IResposta.errada('Primeira'),
        IResposta.errada('Segunda'),
        IResposta.errada('Terceira'),
        IResposta.certa('Quarta'),
    ]),
    new IQuestao(404, 'Pergunta número 2', [
        IResposta.certa('Primeira'),
        IResposta.errada('Segunda'),
        IResposta.errada('Terceira'),
        IResposta.errada('Quarta'),
    ])
]
export default questoes