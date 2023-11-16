import styles from '@/styles/Home.module.css'

import { useState } from 'react'

import Questao from '@/components/Questao'
import IQuestao from '../../model/questao'
import IResposta from '../../model/resposta'

const questaoMock = new IQuestao(2, "Enunciado", [
  IResposta.errada('Teste1'),
  IResposta.errada('Teste2'),
  IResposta.certa('Vermelho3'),
  IResposta.errada('Teste4')
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(i: number) {
    console.log(i)
    setQuestao(questao.responderCom(i))
  }

  function tempoEsgotado() {
    if(questao.naoRespondida) {
      setQuestao(questao.responderCom(-1))
    }
  }
  
  return (
    <main className={styles.container}>
      <Questao valor={questao} respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado} />
    </main>
  )
}
