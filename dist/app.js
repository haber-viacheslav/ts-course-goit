"use strict";
let message = 3;
const messages = ["33", "1", "15"];
const arrNumber = messages.map((value) => Number.parseInt(value));
console.dir(arrNumber);
function printMassage(msg) {
    if (typeof msg === "string" || typeof msg === "number") {
        console.log(msg.toString());
    }
    else {
        console.log(msg.valueOf());
    }
}
function showMassage(msg) {
    if (Array.isArray(msg)) {
        console.log(msg.join(" "));
    }
    else if (typeof msg === "number") {
        console.log(msg.toFixed(2));
    }
    else {
        console.log(msg);
    }
}
const printReadings = (a, b) => {
    if (typeof a === typeof b) {
        console.log(a, b);
    }
    else {
        console.log("Another type");
    }
};
const printReadings2 = (a) => {
    console.log(a.slice(0, 2));
};
const checkReadings = (readings) => {
    if ("system" in readings) {
        console.log(readings.system);
    }
    else {
        console.log(readings.user);
    }
};
checkReadings({ system: 10 });
checkReadings({ user: 4 });
const logValue = (x) => {
    if (x instanceof Date) {
        console.log(x.getDate());
    }
    else {
        console.log(x.length);
    }
};
let msg = "Hello";
msg = "Hello";
const port3000 = 3000;
const port3001 = 3001;
function startServer(protocol, port) {
    if (protocol === "udp") {
        console.log(protocol);
        return "Server started at port: " + port;
    }
    return "Server started";
}
function stopServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log(protocol);
        return `Server stoped at protocol: ${protocol} and port: ${port}`;
    }
    return console.error("Invalid port");
}
console.log(startServer("udp", 3000));
console.log(stopServer("https", 3001));
function createAnimation(num1, animName, timingFunct = "ease", duration, iteration) {
    const elem = document.querySelector(`#${num1}`);
    if (elem) {
        console.log((elem.style.animation = `${animName} ${timingFunct} ${duration} ${iteration}`));
    }
    else {
        console.error("Error");
    }
}
createAnimation("num1", "tasks", "ease", 134, "infinite");
//# sourceMappingURL=app.js.map