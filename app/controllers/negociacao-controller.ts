import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes";
import { NegociacoesView } from "../views/negociacoes-view";
import { OutraMensagem } from "../views/outra-mensagem";

export class NegociacaoController {
    private inputDate: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private outraMensagem  = new OutraMensagem('#outraMensagem');

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
         
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
            this.negociacoes.adiciona(negociacao);
            this.limpaFormulario();
            this.atualizaView();
        } else {
            this.outraMensagem
            .update('Apenas negociações em dias úteis são permitidas');
        }
     
    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantidade = parseInt( this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    private limpaFormulario(): void{
        this.inputDate.value = "";
        this.inputQuantidade.value= "";
        this.inputValor.value = "";
        this.inputDate.focus();
    }

    private atualizaView():void{
        this.negociacoesView.update(this.negociacoes);
        this.outraMensagem.update('Negociação já adicionada por john!');
    }


    
}