import { command } from "./Command";
import { chainOfResponsibility } from "./ChainOfResponsibility";
import { interpreter } from "./Interpreter";
import { iterator } from "./Iterator";

console.log("Chain Of Responsibility pattern:");
chainOfResponsibility();

console.log("---------------------------------");
console.log("Command pattern:");
command();

console.log("---------------------------------");
console.log("Interpreter method pattern:");
interpreter();

console.log("---------------------------------");
console.log("Iterator pattern:");
iterator();
