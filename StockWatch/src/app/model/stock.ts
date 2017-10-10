export class Stock {
    name: String;
    symbol: String;
    price: String;
    ema: String;

    constructor(name:String, symbol:String, price, ema) {
        this.name = name;
        this.symbol = symbol;
        this.price = price;
        this.ema = ema;
    }
}