require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY || "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

module.exports = {
    defaultNwetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        rinkeBy: {
            chainId: 4,
            blockConfirmations: 6,
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
    solidity: "0.8.9",
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
}
