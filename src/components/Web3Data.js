import Web3 from "web3";
const web3 = new Web3(window.etherium.currentProvider);
/** * This file stores the address and abi of our smart contract * These values will need to be updated if a smart contract is changed and recompiled */
/* contract address */
const address = "0x35f73eddbc7df8ce70661da627fcd6e7b0459329";

/* contract abi */
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_ipfsHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uploadDate",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "_userId",
        type: "uint64",
      },
      {
        internalType: "string",
        name: "_uploader",
        type: "string",
      },
    ],
    name: "StoreDocument",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_add",
        type: "address",
      },
    ],
    name: "ownerVerification",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newHash",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "_adhaar",
        type: "uint64",
      },
    ],
    name: "verify",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_adhaar",
        type: "uint64",
      },
    ],
    name: "GetDoc",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "adhaarId",
            type: "uint64",
          },
          {
            internalType: "string",
            name: "ipfsHash",
            type: "string",
          },
          {
            internalType: "address",
            name: "uploader",
            type: "address",
          },
          {
            internalType: "string",
            name: "uploaderName",
            type: "string",
          },
          {
            internalType: "string",
            name: "dateUploaded",
            type: "string",
          },
          {
            internalType: "bool",
            name: "verified",
            type: "bool",
          },
        ],
        internalType: "struct Main.document",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default new web3.eth.Contract(abi, address);
