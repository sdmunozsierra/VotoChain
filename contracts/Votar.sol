pragma solidity ^0.4.2;

contract Votar {
  
  mapping (bytes32 => uint8) public votosRecibidos;
  
  /* Solidity doesn't let you pass in an array of strings in the constructor (yet).
  We will use an array of bytes32 instead to store the list of candidates
  */
  
  bytes32[] public candidatosLista;

  /* This is the constructor which will be called once when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of candidates who will be contesting in the election
  */
  function Voting(bytes32[] candidatoNombres) public {
    candidatosLista = candidatoNombres;
  }

  // This function returns the total votes a candidate has received so far
  function votosTotalesPara(bytes32 candidato) view public returns (uint8) {
    require(validaCandidato(candidato));
    return votosRecibidos[candidato];
  }

  // This function increments the vote count for the specified candidate. This
  // is equivalent to casting a vote
  function votoParaCandidato(bytes32 candidato) public {
    require(validaCandidato(candidato));
    votosRecibidos[candidato] += 1;
  }

  function validaCandidato(bytes32 candidato) view public returns (bool) {
    for(uint i = 0; i < candidatosLista.length; i++) {
      if (candidatosLista[i] == candidato) {
        return true;
      }
    }
    return false;
  }
}
