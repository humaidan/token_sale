var DappToken = artifacts.require("./DappToken.sol");

contract("DappToken", function (accounts) {
  it("Set the total total supply upon deployment", function () {
    return DappToken.deployed()
      .then((x) => {
        tokenInstance = x;
        return tokenInstance.totalSupply();
      })
      .then((totalSupply) => {
        assert.equal(
          1000000,
          totalSupply.toNumber(),
          "sets the total supply to 1,000,000"
        );
      });
  });
});
