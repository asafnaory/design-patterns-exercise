"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteStrategyA = void 0;
/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class ConcreteStrategyA {
    doAlgorithm(data) {
        return data.sort();
    }
}
exports.ConcreteStrategyA = ConcreteStrategyA;
