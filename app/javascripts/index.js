


web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
ContractInstance = VotingContract.at('0x2a9c1d265d06d47e8f7b00ffa987c9185aecf672');
andidatos = {"PAN": "candidato-1", "PRI": "candidato-2", "PRD": "candidato-3"}

function votoParaCandidato() {
  candidatoNombres = $("#candidato").val();
  contractInstance.votoParaCandidato(candidatoNombres, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidatos[candidatoNombres];
    $("#" + div_id).html(contractInstance.votosTotalesPara.call(candidatoNombres).toString());
  });
}

$(document).ready(function() {
  candidatoNombres = Object.keys(candidatos);
  for (var i = 0; i < candidatoNombres.length; i++) {
    let name = candidatoNombres[i];
    let val = contractInstance.votosTotalesPara.call(name).toString()
    $("#" + candidatos[name]).html(val);
  }
});
