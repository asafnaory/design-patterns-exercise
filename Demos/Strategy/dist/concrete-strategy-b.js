"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteStrategyB = void 0;
/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class ConcreteStrategyB {
    doAlgorithm(data) {
        return data.reverse();
    }
}
exports.ConcreteStrategyB = ConcreteStrategyB;
