"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
class Stock {
    constructor(_symbol, _price) {
        this._symbol = _symbol;
        this._price = _price;
        this.observers = [];
    }
    addObserver(observer) {
        console.log(`Subject: ${this._symbol} Attached an observer: ${observer.name}.`);
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Subject: Nonexistent observer.");
        }
        this.observers.splice(observerIndex, 1);
        console.log("Subject: Detached an observer.");
    }
    notifyObservers() {
        console.log("Subject: Notifying observers...");
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    printStock() {
        return `Subject : Stock price: ${this._symbol} ${this._price}`;
    }
    get symbol() {
        return this._symbol;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
        console.log(`Subject: Stock price has changed: ${this.printStock()} `);
        this.notifyObservers();
    }
}
exports.Stock = Stock;
