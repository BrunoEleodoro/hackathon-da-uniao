import * as React from 'react';
import SidebarItem from './SidebarItem';
import {
  PresentationChartBarIcon,
  ChartBarSquareIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/solid';

export default function SidebarComponent({
  children,
}: React.PropsWithChildren<any>) {
  return (
    <div className="w-[70px] bg-amber-500 flex flex-col items-center">
      <SidebarItem label="Home" icon={<ChartBarSquareIcon />} />
      <SidebarItem label="Teste" icon={<PresentationChartBarIcon />} />
      <SidebarItem label="Media" icon={<MegaphoneIcon />} />
      {children}
    </div>
  );
}
