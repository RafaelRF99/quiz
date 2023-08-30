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

    get respondida() {
        for (let resposta of this.#respostas) {
            if (resposta.revelada)
                return true
        }
        return false
    }
}