# Deploy

1. Duplicate `.env.example` in `.env` and fill it.

2. Deploy ProxyOFT on BSC. To execute only once on BSC!

```bash
npx hardhat --network bsc-testnet deploy --tags ProxyOFT

npx hardhat --network bsc-testnet etherscan-verify --api-key XXX
```

3. Deploy OFT on desired EVM chains

```bash
npx hardhat --network goerli deploy --tags OFT

npx hardhat --network goerli etherscan-verify --api-key XXX
```

4. Setup trust between contracts

```bash
npx hardhat --network goerli setTrustedRemote --target-network bsc-testnet --local-contract OFT --remote-contract ProxyOFT
npx hardhat --network bsc-testnet setTrustedRemote --target-network goerli --local-contract ProxyOFT --remote-contract OFT
```

5. Send token from BSC Testnet to Goerli

Make sure to setup allowance from your wallet to ProxyOFT first!

```bash
npx hardhat --network bsc-testnet oftSend --target-network goerli --qty 42 --local-contract ProxyOFT --remote-contract OFT
```

6. Send back token from Goerli to BSC Testnet

```bash
npx hardhat --network goerli oftSend --target-network bsc-testnet --qty 4 --local-contract OFT --remote-contract ProxyOFT
```

# Testnet deployment

- Grape ERC20 on BSC Testnet: `0x238c0917a3D9FD0D23Ba5CF5be72A5594B4C982E`
  - Premint wallet: `0x29bD48E4cB7562D660506Ff940365a76A8d407E3` (Nicolas at Liteflow)
- ProxyOFT on BSC Testnet: `0x664939C92725B6eE0b8c9Ec32c61D76C65981f3A`
- OFT on Goerli: `0xAd6377775Ea431bD6e69F8888cd2Bd5D03B1Fe6b`
- OFT on Sepolia: `0xf3D767298CBaC0a9B48Bf0baDD6F259A61266161`

# Mainnet deployment

- ProxyOFT on BSC: `0x7968Ab2734352Bc52106C62eA1f45EbB78e5787d`
- OFT on Ethereum: `0x861B1eB8be5B2937480764D9AA242B25adBDdDc8`
