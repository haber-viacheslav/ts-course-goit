"use strict";
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    move(distanceInMeters = 5) {
        console.log(`Dog moved ${distanceInMeters}m.`);
        super.move(distanceInMeters);
    }
}
class Snake extends Animal {
    move(distanceInMeters = 10) {
        console.log(`Snake moved ${distanceInMeters}m.`);
        super.move(distanceInMeters);
    }
}
let dog = new Dog();
let snake = new Snake();
dog.move();
snake.move();
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
const serverConfig = {
    protocol: "https",
    port: 3001,
};
const port3000 = 3000;
const port3001 = 3001;
const startServer = (protocol, port) => {
    if (protocol === "udp") {
        console.log(protocol);
        return "Server started at port: " + port;
    }
    return "Server started";
};
function stopServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log(protocol);
        return `Server stopped at protocol: ${protocol} and port: ${port}`;
    }
    return console.error("Invalid port");
}
startServer(serverConfig.protocol, serverConfig.port);
function createAnimation(num1, animName, timingFunct = "ease", duration, iteration) {
    console.log(`${num1} ${animName} ${timingFunct} ${duration} ${iteration}`);
}
createAnimation("num1", "tasks", "ease", 134, "infinite");
//# sourceMappingURL=app.js.map