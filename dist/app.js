"use strict";
class UseStatic {
    constructor() {
        UseStatic.count += 1;
    }
    static itStaticMethod() {
        console.log("Run static method");
    }
    showCount() {
        console.log("Count: " + UseStatic.count);
    }
}
UseStatic.count = 0;
const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();
obj1.showCount();
obj2.showCount();
obj3.showCount();
UseStatic.itStaticMethod();
const isBirthday = true;
const age = 20;
const userName = "Daniel";
if (isBirthday) {
    console.log(`Congrats!!! ${userName}: ${age + 1} years old`);
}
//# sourceMappingURL=app.js.map