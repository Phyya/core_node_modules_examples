/*
Name : OS module
Description: The os module provides a way to interact with the operating system. It allows you to access various information about the system, such as the amount of free memory, the number of CPUs, and the operating system platform.

*/

const os = require('os');

const networkInterfaces = os.networkInterfaces();

for (const interfaceName in networkInterfaces) {
	const interfaceData = networkInterfaces[interfaceName];
	console.log(`Interface name: ${interfaceName}`);
	interfaceData.forEach((address) => {
		console.log(`  IP address: ${address.address}`);
		console.log(`  Netmask: ${address.netmask}`);
		console.log(`  Family: ${address.family}`);
	});
}
