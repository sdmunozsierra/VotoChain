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
  function Voting(string[] candidatoNombres) public {
        bytes32[3] temp;
      for(uint i=0; i<candidatoNombres.length; i++)  
         temp[i] = stringToBytes32(candidatoNombres[i]);
    candidatosLista = temp;
  }

  // This function returns the total votes a candidate has received so far
  function votosTotalesPara(string candidato) view public returns (uint8) {
    bytes32 temp = stringToBytes32(candidato);
    require(validaCandidato(temp));
    return votosRecibidos[temp];
  }

  // This function increments the vote count for the specified candidate. This
  // is equivalent to casting a vote
  function votoParaCandidato(string candidato) public {
    bytes32 temp = stringToBytes32(candidato);
    require(validaCandidato(temp));
    votosRecibidos[temp] += 1;
  }

  function validaCandidato(bytes32  candidato) view public returns (bool) {
   // bytes32 temp= stringToBytes32(candidato);
    for(uint i = 0; i < candidatosLista.length; i++) {
      if (candidatosLista[i] == candidato) {
        return true;
      }
    }
    return false;
  }

function stringToBytes32(string source) returns (bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
        return 0x0;
    }


    assembly {
        result := mload(add(source, 32))
    }
}
}
