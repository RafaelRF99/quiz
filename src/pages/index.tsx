import styles from '@/styles/Home.module.css'

import Questao from '@/components/Questao'
import IQuestao from '../../model/questao'
import IResposta from '../../model/resposta'

export default function Home() {
  const questaoTeste = new IQuestao(2, "Enunciado", [
    IResposta.errada('Teste1'),
    IResposta.errada('Teste2'),
    IResposta.certa('Vermelho3'),
    IResposta.errada('Teste4')
  ])
  
  return (
    <main className={styles.container}>
      <Questao valor={questaoTeste} />
    </main>
  )
}
