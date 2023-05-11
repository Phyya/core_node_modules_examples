const v8 = require('v8');

v8.setFlagsFromString('--max-old-space-size=8192');

console.log(v8.getHeapStatistics());
