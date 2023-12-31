import { Embaralhar } from "@/functions/arrays"
import IResposta from "./resposta"

export default class IQuestao {
    #id: number
    #enunciado: string
    #respostas: IResposta[]
    #acertou: boolean

    constructor(id: number, enunciado: string, resposta: IResposta[], acertou = false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = resposta
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }

    get enunciado() {
        return this.#enunciado
    }

    get respostas() {
        return this.#respostas
    }

    get acertou() {
        return this.#acertou
    }

    get naoRespondida() {
        return !this.respondida
    }

    get respondida() {
        for (let resposta of this.#respostas) {
            if (resposta.revelada)
                return true
        }
        return false
    }

    responderCom(indice: number): IQuestao {
        const acertou = this.respostas[indice]?.certa
        const respostas = this.respostas.map((res, i) => {
            const resSelecionada = indice === i
            const deveRevelar = resSelecionada || res.certa
            return deveRevelar ? res.revelar() : res
        })
        return new IQuestao(this.id, this.enunciado, respostas, acertou)
    }

    embaralharRespostas(): IQuestao {
        let respostasEmbaralhadas = Embaralhar(this.respostas)
        return new IQuestao(this.id, this.enunciado, respostasEmbaralhadas, this.acertou)
    }

    static criarUsandoObjeto(obj: IQuestao): IQuestao {
        const res = obj.respostas.map(resp => IResposta.criarUsandoObjeto(resp))
        return new IQuestao(obj.id, obj.enunciado, res, obj.acertou)
    }

    transformarObjeto() {
        return {
            id: this.id,
            enunciado: this.enunciado,
            respostas: this.respostas.map(res => res.transformarObjeto()),
            respondida: this.respondida,
            acertou: this.acertou
        }
    }
}