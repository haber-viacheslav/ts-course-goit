"use strict";
const serverNewConfig = {
    protocol: "https",
    port: 3001,
};
const backupConfig = {
    protocol: "http",
    port: 3000,
};
const startNewServer = (config) => {
    console.log(`Server started on protocol ${config.protocol}://server:${config.port}`);
    return `Server Started`;
};
startNewServer(serverNewConfig);
startNewServer(backupConfig);
//# sourceMappingURL=test.js.map