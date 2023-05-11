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
