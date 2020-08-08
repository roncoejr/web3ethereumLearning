const Eth = require('ethereumjs-tx')
const Web3 = require('web3')

const web3 = new Web3()

var accountOne = process.env.PRIV_KEY

console.log(web3.eth.accounts.create())


