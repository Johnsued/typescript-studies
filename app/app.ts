import { NegociacaoController } from "./controllers/negociacao-controller";
import { NegociacoesView } from "./views/negociacoes-view";
import { View } from "./views/view";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});

