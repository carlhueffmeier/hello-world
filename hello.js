require('opn')('http://localhost:3000');
module.exports = () => require('cowsay').say({ text: 'hello world!' });
