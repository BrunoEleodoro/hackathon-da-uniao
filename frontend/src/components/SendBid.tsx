import * as React from 'react';
import {
  useAccount,
  useContractWrite,
  useDisconnect,
  useEnsName,
  usePrepareContractWrite,
} from 'wagmi';
import EnsureWalletConnected from './EnsureWalletConnected';
import Input from './Input';
import CryptoImoveis from '../contracts/CryptoImoveis.json';

const SendBid: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
  const { config } = usePrepareContractWrite({
    address: '0x57Df24faaB2142A4E12d4D425b2744F4a0921B50',
    abi: CryptoImoveis,
    functionName: 'bid',
    args: ['1000000000'],
  });
  const { write } = useContractWrite(config);

  return (
    <div className="flex w-full mt-4 flex-col transition-all">
      <div className="text-3xl">Enviar Proposta</div>
      {/* Form */}
      <div id="form" className="mt-4 w-full h-[400px] ">
        {/* Dados */}
        {isConnected ? (
          <input
            type="text"
            disabled
            value={ensName ?? address}
            className="w-full"
          />
        ) : (
          ''
        )}
        {isConnected ? (
          <button type="button" className="" onClick={() => disconnect()}>
            Desconectar
          </button>
        ) : null}
        <Input />
        {/* Send */}
        <EnsureWalletConnected>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              console.log('click');
              write?.();
            }}
          >
            Enviar
          </button>
        </EnsureWalletConnected>
      </div>
    </div>
  );
};

export default SendBid;
