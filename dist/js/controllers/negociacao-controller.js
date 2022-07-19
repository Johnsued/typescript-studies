import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    limpaFormulario(){
        this.inputDate.value = "";
        this.inputQuantidade.value= "";
        this.inputValor.value = "";
        this.inputDate.focus();
        console.log("teste");
    }

    adiciona() {
        const negociacao = new Negociacao(this.inputDate.value, this.inputQuantidade.value, this.inputValor.value);
        console.log(negociacao);
        this.limpaFormulario();

    }
}
