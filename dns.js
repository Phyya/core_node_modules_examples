/*
Name : DNS module
Description: The dns module in Node.js provides an interface to perform DNS (Domain Name System) lookups and other DNS-related operations. It allows Node.js applications to translate domain names to IP addresses and vice versa, and also supports other DNS operations such as reverse lookups, MX record lookups, and SRV record lookups..

*/

const dns = require('dns');

dns.lookup('www.google.com', (err, address, family) => {
	if (err) throw err;
	console.log(`address: ${address}, family: ${family}`);
});
