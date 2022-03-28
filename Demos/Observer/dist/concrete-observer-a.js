"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserverA = void 0;
const concrete_subject_1 = require("./concrete-subject");
/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
class ConcreteObserverA {
    update(subject) {
        if (subject instanceof concrete_subject_1.ConcreteSubject && subject.state < 3) {
            console.log("ConcreteObserverA: Reacted to the event.");
        }
    }
}
exports.ConcreteObserverA = ConcreteObserverA;
