"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserverB = void 0;
const concrete_subject_1 = require("./concrete-subject");
/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
class ConcreteObserverB {
    update(subject) {
        if (subject instanceof concrete_subject_1.ConcreteSubject &&
            (subject.state === 0 || subject.state >= 2)) {
            console.log("ConcreteObserverB: Reacted to the event.");
        }
    }
}
exports.ConcreteObserverB = ConcreteObserverB;
