import * as React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';

type Props = {
  address: string;
};

const NftDetails: React.FC<Props> = ({ address }) => {
  console.log(address);
  return (
    <div className="flex flex-row w-full h-[300px]">
      <img
        src="https://ms.sbwebservices.net/photos/23d6f93f-1a7a-4785-ad20-caab110d5366.jpg?w=295&h=190&slice=true"
        className="object-cover rounded-md"
      />
      <div className="flex flex-col ml-4 text-[#5a5a5a]">
        <span className="text-2xl text-black">Complexo Guatti</span>
        <span className="mt-6">
          Imóvel de matrícula sob n 2.443. Assim descrito Gleba A-2, com a área
          de 11.154,67 m2 (resultante da anexação da primitiva Gleba A-2, com
          área retangular de 810,08 m2, objeto das matrículas n s. 91.854 e
          91.852,{' '}
        </span>
        <div className="flex flex-row mt-4">
          <MapPinIcon className="w-[20px]" /> Valinhos - SP
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
