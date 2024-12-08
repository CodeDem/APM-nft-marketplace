"use client";
import { useSDK } from "@metamask/sdk-react";

declare global {
  interface Window {
    ethereum: object;
  }
}
// import { use, useEffect, useState } from "react";

export default function ConnectWalletButton() {
  const { sdk } = useSDK();
//   const [connected, setConnected] = useState(false);

  const connect = async () => {
    console.log("sdk", sdk);
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

//   useEffect(() => {
//     async function checkConnection() {
//       if (typeof window !== 'undefined' && window.ethereum) {
//         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//         console.log("accounts", accounts);
//         setConnected(accounts && accounts.length > 0);
//       }
//     }
//     checkConnection();
//   }, []);

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };


  return (
    <button
      onClick={false ? disconnect : connect}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {false ? "Disconnect" : ( <><img aria-hidden="true" className="-ml-0.5 size-5 mx-2" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png" /> Connect Wallet</>)}
    </button>
  );
}
