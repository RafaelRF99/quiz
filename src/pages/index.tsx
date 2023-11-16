import styles from '@/styles/Home.module.css'

import { useEffect, useState } from 'react'

import IQuestao from '../../model/questao'
import IResposta from '../../model/resposta'

import Questionario from '@/components/Questionario'

const questaoMock = new IQuestao(2, "Enunciado", [
  IResposta.errada('Teste1'),
  IResposta.errada('Teste2'),
  IResposta.certa('Vermelho3'),
  IResposta.errada('Teste4')
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState(questaoMock)

  async function carregarQuestoesIds() {
    const res = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await res.json()
    console.log(idsQuestoes)
    setIdsDasQuestoes(idsQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const res = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await res.json()
    const novaQuestao = IQuestao.criarUsandoObjeto(json)
    console.log(novaQuestao)
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarQuestoesIds()
  },[])
  
  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  },[idsDasQuestoes])

  function questaoRespondida(questao: IQuestao) {

  }

  function irParaProximoPasso() {

  }
  
  return (
    <main className={styles.container}>
      <Questionario questao={questao} ultimaPergunta={true} 
      questaoRespondida={questaoRespondida} irParaProximoPasso={irParaProximoPasso}  />
    </main>
  )
}
