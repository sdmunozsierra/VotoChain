var Migrations = artifacts.require("./Migrations.sol");
var Votar = artifacts.require("./Votar.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Votar);
};
