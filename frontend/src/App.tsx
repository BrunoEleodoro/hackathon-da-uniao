import * as React from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import './App.css';
import NftDetails from './components/NftDetails';
import SendBid from './components/SendBid';
import SidebarComponent from './components/Siderbar';
import TableBids from './components/TableBids';
import { polygon } from 'wagmi/chains';

import { publicProvider } from 'wagmi/providers/public';

import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const { chains, provider, webSocketProvider } = configureChains(
  [polygon],
  [publicProvider()]
);
// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

function App() {
  return (
    <WagmiConfig client={client}>
      <div className="flex flex-row">
        {/* Sidebar */}
        <SidebarComponent />
        {/* Content */}
        <div className="w-full flex-col p-11">
          {/* NFT details */}
          <NftDetails address="" />
          {/* Highest Bid */}
          <div className="mt-4 text-2xl">
            <b>Maior valor: </b>0.1 Ether
          </div>
          {/* Table of bids */}
          <TableBids />
          {/* Send Bid */}
          <SendBid />
        </div>
      </div>
    </WagmiConfig>
  );
}

export default App;
