pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MetaCoin.sol";

contract TestAdoption {
  MetaCoin voter = MetaCoin(DeployedAddresses.MetaCoin());
    function testUserCanAdoptPet() {
    string returnedId = voter.SetVoto("PAN");

        string expected = "PAN";

    Assert.equal(returnedId, expected, "Adoption of pet ID 8 should be recorded.");
    }

}
