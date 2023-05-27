import { ethers } from 'hardhat'

async function main() {
  const factory = await deployFactory()
}

async function deployFactory() {
  const UniswapV3Factory = await ethers.getContractFactory('UniswapV3Factory')
  const factory = await UniswapV3Factory.deploy()
  await factory.deployed()
  console.log(`UniswapV3Factory deployed at: $${factory.address}`)

  return factory
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
