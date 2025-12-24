
import React from 'react';
import { District } from '../types';

interface DistrictButtonProps {
  district: District;
  onClick: (name: string) => void;
}

const DistrictButton: React.FC<DistrictButtonProps> = ({ district, onClick }) => {
  const getRegionColors = () => {
    switch (district.region) {
      case 'HK_ISLAND':
        return 'bg-blue-600 hover:bg-blue-500 border-blue-400';
      case 'KOWLOON':
        return 'bg-red-600 hover:bg-red-500 border-red-400';
      case 'NEW_TERRITORIES':
        return 'bg-emerald-600 hover:bg-emerald-500 border-emerald-400';
      default:
        return 'bg-slate-600 hover:bg-slate-500 border-slate-400';
    }
  };

  return (
    <button
      onClick={() => onClick(district.name)}
      className={`
        ${getRegionColors()}
        text-white text-xs font-bold py-2 px-1 rounded-md border-b-2 
        transition-all active:translate-y-0.5 active:border-b-0
        shadow-md flex items-center justify-center text-center
        min-h-[40px]
      `}
    >
      {district.name}
    </button>
  );
};

export default DistrictButton;
