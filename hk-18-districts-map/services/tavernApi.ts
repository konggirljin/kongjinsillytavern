
/**
 * Helper to communicate with SillyTavern's global objects.
 * Supports both direct mounting and Iframe postMessage for security.
 */

export const triggerDistrictCommand = async (districtName: string) => {
  const command = `/setinput 前往${districtName}區域`;
  
  // 1. Check if we are in an iframe (typical for modern SillyTavern extensions)
  if (window.self !== window.top) {
      window.parent.postMessage({
          type: 'SillyTavernCommand',
          command: command
      }, '*');
      return;
  }

  // 2. Direct mounting fallback (TavernHelper or Global SillyTavern)
  const context = (window as any).TavernHelper || (window as any).SillyTavern;
  
  if (context) {
    try {
      if (context.triggerSlash) {
          await context.triggerSlash(command);
      } else if (context.executeSlashCommandsWithOptions) {
          await context.executeSlashCommandsWithOptions(command);
      }
    } catch (error) {
      console.error('Failed to execute command:', error);
    }
  } else {
    // 3. Last resort fallback
    console.warn('SillyTavern environment not detected.');
    alert(`指令: ${command}`);
  }
};

export const registerHKMapMacro = () => {
  // If running within SillyTavern's main context
  if ((window as any).TavernHelper) {
    (window as any).TavernHelper.registerMacroLike(/\[HK_MAP\]/gi, () => {
      return '<div class="hk-map-trigger">Map Macro Triggered</div>';
    });
  }
};
