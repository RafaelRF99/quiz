export default class IResposta {
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor (valor: string, certa: boolean, revelada = false) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    get valor() {
        return this.#valor
    }

    get certa() {
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    static certa(valor: string) {
        return new IResposta(valor, true)
    }

    static errada(valor: string) {
        return new IResposta(valor, false)
    }

    revelar() {
        return new IResposta(this.valor, this.certa, true)
    }

    static criarUsandoObjeto(obj: IResposta): IResposta {
        return new IResposta(obj.valor, obj.certa, obj.revelada)
    }

    transformarObjeto() {
        return {
            valor: this.valor,
            certa: this.certa,
            revelada: this.revelada,
        }
    }
}