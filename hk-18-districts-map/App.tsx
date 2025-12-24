
import React, { useEffect } from 'react';
import HKMap from './components/HKMap';
import { registerHKMapMacro } from './services/tavernApi';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize macro registration so SillyTavern knows how to handle [HK_MAP]
    registerHKMapMacro();
    
    // In a standard iframe-based extension, we might need to notify Tavern that we are ready
    // Casting window to any to access TavernHelper property which is not defined in the standard Window interface
    if ((window as any).TavernHelper?.builtin?.duringGenerating()) {
        console.log('App initialized during generation.');
    }
  }, []);

  return (
    <div className="min-h-screen p-2 sm:p-4 flex items-center justify-center transition-colors duration-500">
      <HKMap />
    </div>
  );
};

export default App;
