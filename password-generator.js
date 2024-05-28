const generator = require('generate-password');

const passwords = generator.generateMultiple(3, {
	length: 10,
    numbers:true,
    symbols:true,
	strict:true
});

console.log(passwords);