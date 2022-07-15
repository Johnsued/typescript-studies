export class Negociacao {
    private _data: Date;
    private _quantidade: Number;
    private _valor: Number;

    constructor(data:Date, quantidade: Number, valor:Number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    get data() {
        return this.data;
    }

    get quantidade() {
        return this.quantidade;
    }

    get valor() {
        return this.valor;
    }

    get volume() {
        return this.quantidade * this.valor;
    }
}