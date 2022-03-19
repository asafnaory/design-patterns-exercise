"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockListView = void 0;
class StockListView {
    constructor() {
        this.name = "StockListView";
        this.stocks = [];
    }
    addStock(stock) {
        this.stocks.push(stock);
        stock.addObserver(this);
    }
    show() {
        console.log("StockListView: Stocks: ");
        this.stocks.forEach((stock) => console.log(stock.printStock()));
    }
    update(stock) {
        console.log(`${this.name}: Stock with symbol ${stock.symbol} price has changed to ${stock.price}`);
    }
}
exports.StockListView = StockListView;
