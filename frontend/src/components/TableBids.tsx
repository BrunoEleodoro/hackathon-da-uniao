import * as React from 'react';

// type Props = {};

const TableBids: React.FC = () => {
  return (
    <div className="flex flex-col mt-12">
      {/* Table Header */}
      <div className="flex w-full font-bold justify-between">
        <div>Endereço</div>
        <div>Valor</div>
        <div>Ações</div>
      </div>
      {/* Table Content */}
      <div className="flex w-full justify-between">
        <div>0x4785b64219953ed6F3758...</div>
        <div>0.1 Ether</div>
        <div className="underline">Ver Transação</div>
      </div>
      <div className="flex w-full justify-between">
        <div>0x4785b64219953ed6F3758...</div>
        <div>0.1 Ether</div>
        <div className="underline">Ver Transação</div>
      </div>
      <div className="flex w-full justify-between">
        <div>0x4785b64219953ed6F3758...</div>
        <div>0.1 Ether</div>
        <div className="underline">Ver Transação</div>
      </div>
    </div>
  );
};

export default TableBids;
