
import React from 'react';
import DistrictButton from './DistrictButton';
import { HK_DISTRICTS } from '../types';
import { triggerDistrictCommand } from '../services/tavernApi';

const HKMap: React.FC = () => {
  const regions = [
    { key: 'NEW_TERRITORIES', label: '新界 (New Territories)' },
    { key: 'KOWLOON', label: '九龍 (Kowloon)' },
    { key: 'HK_ISLAND', label: '香港島 (HK Island)' },
  ];

  const handleDistrictClick = (name: string) => {
    triggerDistrictCommand(name);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-slate-900/80 backdrop-blur rounded-xl border border-slate-700 shadow-2xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
        <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
          <span className="text-red-500">🇭🇰</span> 香港十八區地圖
        </h2>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Interactive Selection</span>
      </div>

      <div className="space-y-6">
        {regions.map((region) => (
          <div key={region.key} className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">
              {region.label}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {HK_DISTRICTS.filter(d => d.region === region.key).map((district) => (
                <DistrictButton 
                  key={district.id} 
                  district={district} 
                  onClick={handleDistrictClick} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50 flex flex-wrap gap-4 text-[10px] text-slate-500 font-medium italic">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div> 新界
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500"></div> 九龍
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div> 港島
        </div>
        <div className="ml-auto opacity-70">
          點擊區份自動輸入指令
        </div>
      </div>
    </div>
  );
};

export default HKMap;
