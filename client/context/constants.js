import realEstate from "./RealEstate.json";
require("dotenv").config();

export const REAL_ESTATE_ADDRESS = "0xb06cbBeAE36EdBa7a14D733E8aE922a29630c7C1";
export const REAL_ESTATE_ABI = realEstate.abi;

export const PINATA_API_KEY = "da212708ca61ceb1b91d";
export const PINATA_SECRET_KEY = "ce9bea71753244b0e67a0b3039e09889b69d15b863d25f3b9110449afae55c05";

// NETWORK
const networks = {
  // emc_mainnet: {
  //   chainId: Waiting for launch...,
  //   chainName: Waiting for launch...,
  //   nativeCurrency: {
  //     name: "EMC",
  //     symbol: "EMC",
  //     decimals: 18,
  //   },
  //   rpcUrls: Waiting for launch...,
  //   blockExplorerUrls: Waiting for launch...,
  // },
  emc_testnet: {
    chainId: `0x${Number(99876).toString(16)}`,
    chainName: "EMC Testnet",
    nativeCurrency: {
      name: "EMC",
      symbol: "EMC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc1-testnet.emc.network"],
    blockExplorerUrls: ["https://testnet.emcscan.com"],
  },
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  bsc_testnet: {
    chainId: `0x${Number(97).toString(16)}`,
    chainName: "BNB Smart Chain Testnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-testnet-rpc.publicnode.com"],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  open_campus_codex: {
    chainId: `0x${Number(656476).toString(16)}`,
    chainName: "Open Campus Codex",
    nativeCurrency: {
      name: "EDU",
      symbol: "EDU",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.open-campus-codex.gelato.digital"],
    blockExplorerUrls: ["https://opencampus-codex.blockscout.com"],
  },
  neox_testnet: {
    chainId: `0x${Number(12227332).toString(16)}`,
    chainName: "NeoX Testnet T4",
    nativeCurrency: {
      name: "NeoX",
      symbol: "GAS",
      decimals: 18,
    },
    rpcUrls: ["https://12227332.rpc.thirdweb.com"],
    blockExplorerUrls: ["https://xexplorer.neo.org/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const ACTIVE_NETWORK = "emc_testnet";

export const handleNetworkSwitch = async () => {
  const networkName = "emc_testnet";
  const network = await changeNetwork({ networkName });
  return networkName;
};