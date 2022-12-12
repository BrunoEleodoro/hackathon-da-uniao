import * as React from 'react';

type Props = {
  icon: any;
  label: string;
};

const SidebarItem: React.FC<Props> = ({ icon, label }) => {
  return (
    <div className="flex justify-center items-center w-[30px] h-[30px] hover:bg-slate-200 transition-all mt-4 rounded-sm">
      <div title={label} className="w-[30px] h-[30px]">
        {icon}
      </div>
    </div>
  );
};

export default SidebarItem;
