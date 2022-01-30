import Page from "./page";
import * as ElementHelper from "../helpers/elementHelper";

class HomePage extends Page {
  async verifyCopperLogoPresent() {
    const logoPresent = await ElementHelper.verifyElementPresent("copperLogo");
    return logoPresent;
  }

  async getNavItemsText() {
    const navItemsText = await ElementHelper.getElementText("navMenu");
    const navItemsArray = navItemsText.split("\n");
    return navItemsArray;
  }

  async open() {
    super.open("/");
  }
}

export default new HomePage();
