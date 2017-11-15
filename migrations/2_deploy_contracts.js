var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Votar = artifacts.require("./Votar.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(Votar);
// HEAD
};
///////////////////////////////
// 7848437d094b3971e8d6aa065e836db019184bd3
