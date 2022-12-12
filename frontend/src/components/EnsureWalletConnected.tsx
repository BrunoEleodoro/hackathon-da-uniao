import * as React from 'react';
import { useAccount, useConnect } from 'wagmi';

type Props = { children: React.ReactNode };

const EnsureWalletConnected: React.FC<Props> = ({ children }) => {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  return isConnected ? (
    <>{children}</>
  ) : (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => connect({ connector: connectors[0] })}
    >
      Conectar Carteira
    </button>
  );
};

export default EnsureWalletConnected;
