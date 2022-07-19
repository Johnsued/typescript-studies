import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputDate: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
         
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao + "teste");
        this.limpaFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantidade = parseInt( this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limpaFormulario(): void{
        this.inputDate.value = "";
        this.inputQuantidade.value= "";
        this.inputValor.value = "";
        this.inputDate.focus();
    }
    
}