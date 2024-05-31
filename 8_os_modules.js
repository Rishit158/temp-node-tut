// here are some methods of os modules
// more are there in docs if interesteds
const os = require("os");

// infor about current user
const user = os.userInfo();
// console.log(user);

// method returns the uptime of the system in seconds
console.log(`The uptime of the system is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
