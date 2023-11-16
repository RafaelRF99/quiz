import styles from './Resposta.module.css'

import IResposta from "../../../model/resposta"

interface RespostaProps {
    valor: IResposta
    indice: number
    letra: string
    corFundoLetra: string
}

export default function Resposta({ valor, indice, letra, corFundoLetra }: RespostaProps) {
  return (
    <div className={styles.resposta}>
        <div className={styles.conteudo}>
            <div className={styles.frente}>
                <div className={styles.letra} 
                style={{ backgroundColor: corFundoLetra }}>{letra}</div>
                <div className={styles.valor}>{valor.valor}</div>
            </div>
            <div className={styles.verso}></div>
        </div>
    </div>
  )
}
