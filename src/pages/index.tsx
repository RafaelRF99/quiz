import styles from '@/styles/Home.module.css'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import IQuestao from '../../model/questao'

import Questionario from '@/components/Questionario'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<IQuestao>(null!)
  const [respostasCertas, setRespostasCertas] = useState(0)

  const router = useRouter()

  async function carregarQuestoesIds() {
    const res = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await res.json()
    setIdsDasQuestoes(idsQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const res = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await res.json()
    const novaQuestao = IQuestao.criarUsandoObjeto(json)
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarQuestoesIds()
  },[])
  
  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  },[idsDasQuestoes])

  function questaoRespondida(questaoRespondida: IQuestao) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function irParaProximaPergunta() {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice]
  }

  function irParaProximoPasso() {
    const proximoId = irParaProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }
  
  return (
    <main className={styles.container}>
      {questao  ? (
        <Questionario questao={questao} ultimaPergunta={irParaProximaPergunta() === undefined} 
        questaoRespondida={questaoRespondida} irParaProximoPasso={irParaProximoPasso}  />
      ) : false}
    </main>
  )
}
