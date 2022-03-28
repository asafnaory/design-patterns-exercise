"use strict";
/**
 * The client code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const concrete_observer_a_1 = require("./concrete-observer-a");
const concrete_observer_b_1 = require("./concrete-observer-b");
const concrete_subject_1 = require("./concrete-subject");
const subject = new concrete_subject_1.ConcreteSubject();
const observer1 = new concrete_observer_a_1.ConcreteObserverA();
subject.attach(observer1);
const observer2 = new concrete_observer_b_1.ConcreteObserverB();
subject.attach(observer2);
subject.someBusinessLogic();
subject.someBusinessLogic();
subject.detach(observer2);
subject.someBusinessLogic();
