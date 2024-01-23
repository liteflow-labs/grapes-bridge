const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name]
    console.log(`[${hre.network.name}] Endpoint Address: ${lzEndpointAddress}`)

    await deploy("ProxyOFT", {
        from: deployer,
        args: [
            lzEndpointAddress,
            // "0x238c0917a3D9FD0D23Ba5CF5be72A5594B4C982E", // BSC testnet Grape NFT
            "0x555296de6A86E72752e5C5DC091FE49713Aa145C", // BSC Grape NFT
        ],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["ProxyOFT"]
