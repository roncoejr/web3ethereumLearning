const Web3 = require('web3')

const web3 = new Web3('http://127.0.0.1:8545')

const accountOne = process.env.ACCTONE
const accountTwo = process.env.ACCTTWO
const privAccountThree = process.env.PRIV_ACCT_3
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

const hprivAccountThree = Buffer.from(process.env.PRIV_ACCT_3, 'hex')

// web3.eth.personal.importRawKey(privAccountThree, 'testing 123!').then(console.log)
// web3.eth.personal.unlockAccount(accountThree, 'testing 123!', (err, hash) => { console.log( err );} )
// web3.eth.personal.getAccounts((accounts) => { console.log(accounts)})
web3.eth.personal.getAccounts().then(console.log)

web3.eth.personal.unlockAccount(accountThree, 'testing 123!', 600).then(console.log('Account unlocked'))

web3.eth.personal.sendTransaction({
	from: accountThree, 
	to: accountTwo, 
	value: web3.utils.toWei('1', 'ether')
}, 'testing 123!', (err, hash) => { console.log( err )} );

web3.eth.getBalance(accountOne, (err, eth) => { 
	balance = eth;

	console.log(accountOne, " Amount of Eth: ", web3.utils.fromWei(balance));
})
