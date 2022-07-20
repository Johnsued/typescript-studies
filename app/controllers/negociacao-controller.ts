import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes";

export class NegociacaoController {
    private inputDate: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
         
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
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