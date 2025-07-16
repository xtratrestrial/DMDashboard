/**
 * PartyHUD - Basic ApplicationV2 with Tabs
 * @author Your Name
 */

/**
 * PartyHUD Application - Basic ApplicationV2 with Tabs
 */
class PartyHUD extends foundry.applications.api.ApplicationV2 {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: 'party-hud',
      title: 'Party HUD',
      template: 'modules/partyhud/templates/partyhud.html',
      width: 600,
      height: 400,
      resizable: true,
      minimizable: true,
      classes: ['party-hud'],
    });
  }

  /**
   * Required for ApplicationV2: render the HTML content for the app.
   */
  async _renderHTML(options = {}) {
    console.log('PartyHUD | _renderHTML called');
    return await super._renderHTML(options);
  }

  /**
   * Required for ApplicationV2: replace the HTML content for the app.
   */
  async _replaceHTML(element, html, options = {}) {
    console.log('PartyHUD | _replaceHTML called');
    return await super._replaceHTML(element, html, options);
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    console.log('PartyHUD | activateListeners called');
    // Initialize Tabs
    this.tabs = new foundry.applications.ux.Tabs({
      navSelector: ".tabs-nav",
      contentSelector: ".tabs-content",
      initial: "status",
      callback: (tab, html, tabs) => {
        console.log(`PartyHUD | Tab changed to: ${tab}`);
      }
    });
  }
}

// Register the module and add a button to open the PartyHUD
Hooks.once('init', () => {
  console.log('PartyHUD | Initializing Party HUD module');

  // Register a global instance for debugging
  window.PartyHUD = PartyHUD;
});

Hooks.once('ready', () => {
  // Add a button to the UI for demonstration (can be replaced with token layer integration later)
  if (game.user.isGM) {
    const btn = document.createElement('button');
    btn.innerText = 'Open Party HUD';
    btn.style.position = 'fixed';
    btn.style.bottom = '2em';
    btn.style.right = '2em';
    btn.style.zIndex = 1000;
    btn.onclick = () => {
      if (!window._partyHudApp) window._partyHudApp = new PartyHUD();
      window._partyHudApp.render(true);
    };
    document.body.appendChild(btn);
  }
}); 