import styles from './Questao.module.css'

import IQuestao from "../../../model/questao"

import Enunciado from '../Enunciado'
import Resposta from '../Resposta'
import Temporizador from '../Temporizador'

interface QuestaoProps {
    valor: IQuestao
    respostaFornecida: (i: number) => void
    tempoEsgotado: () => void
}

export default function Questao({ valor, respostaFornecida, tempoEsgotado }: QuestaoProps) {
    const letras = [
        {valor: 'A', cor: '#F2C866'},
        {valor: 'B', cor: '#F266BA'},
        {valor: 'C', cor: '#85D4F2'},
        {valor: 'D', cor: '#BCE596'},
    ]

    const questao = valor

    function RenderizarRespostas() {
        return valor.respostas.map((res, i ) => {
            return <Resposta key={i} valor={res} indice={i} 
            letra={letras[i].valor} corFundoLetra={letras[i].cor} 
            respostaFornecida={respostaFornecida} />
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={valor.enunciado} />
            <Temporizador duracao={10} tempoEsgotado={tempoEsgotado} />
            {RenderizarRespostas()}
        </div>
    )
}