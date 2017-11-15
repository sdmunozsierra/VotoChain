web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi =[{"constant":true,"inputs":[{"name":"candidato","type":"bytes32"}],"name":"votosTotalesPara","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidato","type":"bytes32"}],"name":"validaCandidato","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidatosLista","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidato","type":"bytes32"}],"name":"votoParaCandidato","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidatoNombres","type":"bytes32[]"}],"name":"Voting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votosRecibidos","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}]
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
var ContractInstance = VotingContract.at('0xcd4215e5e59dff3f5f9b910a9b018ff2def68677');

var candidatos = {"PAN": "candidato-1", "PRI": "candidato-2", "PRD": "candidato-3"}

function votoParaCandidato() {
  candidatoNombres = $("#candidato").val();
  //contractInstance.votoParaCandidato(candidatoNombres, {from: web3.eth.accounts[0]}, function() {
    //let div_id = candidato[candidatoNombres];
    //$("#" + div_id).html(contractInstance.votosTotalesPara.call(candidatoNombres).toString());
  //});
}

$(document).ready(function() {
  candidatoNombres = Object.keys(candidato);
  for (var i = 0; i < candidatoNombres.length; i++) {
    let name = candidatoNombres[i];
    let val = ContractInstance.votosTotalesPara.call(name).toString()
    $("#" + candidato[name]).html(val);
  }

    $(".btn").click(function() {

ContractInstance.votoParaCandidato(candidatoNombres, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidato[candidatoNombres];
    $("#" + div_id).html(ContractInstance.votosTotalesPara.call(candidatoNombres).toString());
  });






        votoParaCandidato();
  }); //end onclick





}); //end document.redy

