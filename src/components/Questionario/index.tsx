import styles from './Questionario.module.css'

import IQuestao from "../../../model/questao"
import Questao from '../Questao'
import Botao from '../Botao'

interface QuestionarioProps {
    questao: IQuestao
    ultimaPergunta: boolean
    questaoRespondida: (questao: IQuestao) => void
    irParaProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(i: number) {
        if (props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(i))
        }
    }


  return (
    <div className={styles.questionario}>
        {props.questao ? 
        <Questao valor={props.questao} tempoParaResposta={7}
        respostaFornecida={respostaFornecida} tempoEsgotado={props.irParaProximoPasso} /> : false}
        <Botao onClick={props.irParaProximoPasso} 
        texto={props.ultimaPergunta ? 'Finalizar' : 'Próxima'} />
    </div>
  )
}
