import { NegociacaoController } from "./controllers/negociacao-controller";
import { NegociacoesView } from "./views/negociacoes-view";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
})

