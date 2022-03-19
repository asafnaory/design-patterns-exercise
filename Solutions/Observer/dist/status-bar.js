"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBar = void 0;
class StatusBar {
    constructor() {
        this.name = "StatusBar";
        this.stocks = [];
    }
    addStock(stock) {
        this.stocks.push(stock);
        stock.addObserver(this);
    }
    removeStock(stock) {
        const stockIdx = this.stocks.findIndex((subscribedStock) => subscribedStock.symbol === stock.symbol);
        this.stocks[stockIdx].removeObserver(this);
        this.stocks.splice(stockIdx, 1);
    }
    show() {
        console.log("StatusBar: Stocks: ");
        this.stocks.forEach((stock) => console.log(stock.printStock()));
    }
    update(stock) {
        console.log(`${this.name}: Stock with symbol ${stock.symbol} price has changed to ${stock.price}`);
    }
}
exports.StatusBar = StatusBar;
