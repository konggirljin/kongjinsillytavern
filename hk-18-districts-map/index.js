
/**
 * SillyTavern Extension: HK 18 Districts Map
 * This file is the entry point SillyTavern looks for when installing via GitHub.
 */

import { registerSlashCommand } from "../../../slash-commands.js";
import { extension_settings, getContext } from "../../../extensions.js";

// The unique ID for your extension
const extensionName = "hk-18-districts-map";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;

/**
 * Opens the Map UI in a SillyTavern Dialog
 */
function openMapDialog() {
    const html = `
        <div id="hk-map-extension-container" style="width: 100%; height: 100%; min-height: 500px;">
            <iframe src="${extensionFolderPath}/index.html" style="width: 100%; height: 600px; border: none; border-radius: 10px;"></iframe>
        </div>
    `;
    callPopup(html, 'none');
}

/**
 * SillyTavern calls this function when the extension is loaded
 */
(function() {
    // 1. Add a button to the extensions menu
    const settingsHtml = `
        <div class="hk-map-settings">
            <div class="inline-drawer">
                <div class="inline-drawer-header">
                    <b>HK 18 Districts Map</b>
                </div>
                <div class="inline-drawer-content">
                    <div class="setup_item">
                        <div class="menu_button" id="open_hk_map_btn">開啟地圖界面</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $("#extensions_settings").append(settingsHtml);
    $("#open_hk_map_btn").on("click", () => {
        openMapDialog();
    });

    // 2. Register a Slash Command: /hkmap
    registerSlashCommand("hkmap", () => {
        openMapDialog();
    }, [], "Opens the Hong Kong 18 Districts interactive map.", true, true);

    console.log("HK 18 Districts Map Extension loaded.");
})();
