const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));

const contractAddress = '0x3cA38E089Cd3BF3cF24Dabc40dF0c988075b2729'; // Replace with your contract address
const contractABI = [
                      {
                        "inputs": [
                          {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                          }
                        ],
                        "name": "burn",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                      },
                      {
                        "inputs": [
                          {
                            "internalType": "address",
                            "name": "_to",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                          }
                        ],
                        "name": "mint",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                      },
                      {
                        "inputs": [
                          {
                            "internalType": "address",
                            "name": "_to",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                          }
                        ],
                        "name": "transfer",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                      },
                      {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                      },
                      {
                        "inputs": [
                          {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                          }
                        ],
                        "name": "balances",
                        "outputs": [
                          {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                          }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                      },
                      {
                        "inputs": [
                          {
                            "internalType": "address",
                            "name": "_address",
                            "type": "address"
                          }
                        ],
                        "name": "getBalance",
                        "outputs": [
                          {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                          }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                      },
                      {
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                          {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                          }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                      }
                  ]; // Replace with your contract ABI

const contract = new web3.eth.Contract(contractABI, contractAddress);

const mintBtn = document.getElementById('mint-btn');
const burnBtn = document.getElementById('burn-btn');
const transferBtn = document.getElementById('transfer-btn');
const balanceValue = document.getElementById('balance-value');

mintBtn.addEventListener('click', async () => {
  try {
    await contract.methods.mint('0x...', 10).send({ from: '0x...' }); // Replace with your address
    updateBalance();
  } catch (error) {
    console.error(error);
  }
});

burnBtn.addEventListener('click', async () => {
  try {
    await contract.methods.burn(5).send({ from: '0x...' }); // Replace with your address
    updateBalance();
  } catch (error) {
    console.error(error);
  }
});

transferBtn.addEventListener('click', async () => {
  try {
    await contract.methods.transfer('0x...', 2).send({ from: '0x...' }); // Replace with your address and recipient address
    updateBalance();
  } catch (error) {
    console.error(error);
  }
});

async function updateBalance() {
  const balance = await contract.methods.getBalance('0x...').call(); // Replace with your address
  balanceValue.textContent = balance.toString();
}

updateBalance();
