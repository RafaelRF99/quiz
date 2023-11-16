import styles from './Resposta.module.css'

import IResposta from "../../../model/resposta"

interface RespostaProps {
    valor: IResposta
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (i: number) => void
}

export default function Resposta({ valor, indice, letra, corFundoLetra, respostaFornecida }: RespostaProps) {
  return (
    <div className={styles.resposta} 
    onClick={() => respostaFornecida(indice)}>
        <div className={styles.conteudo}>
          {!valor.revelada ? (
            <div className={styles.frente}>
            <div className={styles.letra} 
            style={{ backgroundColor: corFundoLetra }}>{letra}</div>
            <div className={styles.valor}>{valor.valor}</div>
        </div>
          ) : (
            <div className={styles.verso}>
              {valor.certa ? (
                <div className={styles.certa}>
                <div>A resposta certa é...</div>
                <div className={styles.valor}>{valor.valor}</div>
              </div>
              ) : (
                <div className={styles.errada}>
                <div>A resposta informada esta errada...</div>
                <div className={styles.valor}>{valor.valor}</div>
              </div>
              )}
            </div>
          )}
        </div>
    </div>
  )
}
