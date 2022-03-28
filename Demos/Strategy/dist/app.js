"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concrete_strategy_a_copy_1 = require("./concrete-strategy-a copy");
const concrete_strategy_b_1 = require("./concrete-strategy-b");
const context_1 = require("./context");
/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
const context = new context_1.Context(new concrete_strategy_a_copy_1.ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();
console.log('');
console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new concrete_strategy_b_1.ConcreteStrategyB());
context.doSomeBusinessLogic();
