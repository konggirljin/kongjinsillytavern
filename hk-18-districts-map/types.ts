
export interface District {
  id: string;
  name: string;
  region: 'HK_ISLAND' | 'KOWLOON' | 'NEW_TERRITORIES';
}

export const HK_DISTRICTS: District[] = [
  // New Territories
  { id: 'north', name: '北區', region: 'NEW_TERRITORIES' },
  { id: 'tai_po', name: '大埔區', region: 'NEW_TERRITORIES' },
  { id: 'sha_tin', name: '沙田區', region: 'NEW_TERRITORIES' },
  { id: 'sai_kung', name: '西貢區', region: 'NEW_TERRITORIES' },
  { id: 'tsuen_wan', name: '荃灣區', region: 'NEW_TER_ISLAND' as any }, // Part of NT but grouped
  { id: 'tuen_mun', name: '屯門區', region: 'NEW_TERRITORIES' },
  { id: 'yuen_long', name: '元朗區', region: 'NEW_TERRITORIES' },
  { id: 'kwai_tsing', name: '葵青區', region: 'NEW_TERRITORIES' },
  { id: 'islands', name: '離島區', region: 'NEW_TERRITORIES' },
  // Kowloon
  { id: 'yau_tsim_mong', name: '油尖旺區', region: 'KOWLOON' },
  { id: 'sham_shui_po', name: '深水埗區', region: 'KOWLOON' },
  { id: 'kowloon_city', name: '九龍城區', region: 'KOWLOON' },
  { id: 'wong_tai_sin', name: '黃大仙區', region: 'KOWLOON' },
  { id: 'kwun_tong', name: '觀塘區', region: 'KOWLOON' },
  // HK Island
  { id: 'central_western', name: '中西區', region: 'HK_ISLAND' },
  { id: 'wan_chai', name: '灣仔區', region: 'HK_ISLAND' },
  { id: 'eastern', name: '東區', region: 'HK_ISLAND' },
  { id: 'southern', name: '南區', region: 'HK_ISLAND' },
];
