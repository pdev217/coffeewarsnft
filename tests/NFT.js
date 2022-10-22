const { expect } = require("chai");

let hardhatNFT;
let owner;
let addr1;

describe("CoffeeWars contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    [owner, addr1] = await ethers.getSigners();

    Coffee = await ethers.getContractFactory("CoffeeWars");

    hardhatNFT= await Coffee.deploy();

    expect(await hardhatNFT.totalSupply()).to.equal(ownerBalance);
  });

  it("mint successfully", async function () {
    await hardhatNFT.mint('https://ipfs.io/ipfs/QmRFs2ZhztgiVSivw9mJVYDqgsLsBcUSP8DipgkBovREX5')
      .then((res) => expect(res))
  })

  it("double mint successfully", async function() {
    await hardhatNFT.mint(["https://ipfs","https://ipfs"])
      .then((res) => expect(res))
  })
})