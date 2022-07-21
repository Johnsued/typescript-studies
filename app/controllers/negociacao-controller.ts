import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes";
import { MensagemView } from "../views/mensagem-view";
import { NegociacoesView } from "../views/negociacoes-view";
import { OutraMensagem } from "../views/outra-mensagem";

export class NegociacaoController {
    private inputDate: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView('#mensagemView');
    private outraMensagem  = new OutraMensagem('#outraMensagem');

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
         
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com secesso!');
        this.outraMensagem.update('Negociação já adicionada por john!');
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