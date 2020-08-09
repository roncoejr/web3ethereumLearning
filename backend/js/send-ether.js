const Web3 = require('web3')

const web3 = new Web3('http://127.0.0.1:8545')

const accountOne = process.env.ACCTONE
const accountTwo = process.env.ACCTTWO
const accountThree = process.env.ACCTTHREE
const accountFour = process.env.ACCTFOUR


web3.eth.getBalance(accountFour, (err, eth) => { 
	balance = eth;

	console.log(accountFour, " Amount of Eth: ", web3.utils.fromWei(balance));


})

web3.eth.getBalance(accountThree, (err, eth) => { 
	balance = eth;

	console.log(accountThree, " Amount of Eth: ", web3.utils.fromWei(balance));
})

web3.eth.sendTransaction({
	from: accountTwo, 
	to: accountOne, 
	value: web3.utils.toWei('1', 'ether')
}, (err, hash) => { console.log( err )} );


web3.eth.getBalance(accountOne, (err, eth) => { 
	balance = eth;

	console.log(accountOne, " Amount of Eth: ", web3.utils.fromWei(balance));
})
