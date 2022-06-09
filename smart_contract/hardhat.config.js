require('@nomiclabs/hardhat-waffle');

module.exports = {
  defaultNetwork: "rinkeby",
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/C-Emd3SqyFPlvNJTodF2qtKKtWLHxLPJ',
      accounts: ['ffffc91fbebe667de6dca93398ff4dc9121e2ffd50dfae2108ff691aa062206c'],
    },
  }
  };