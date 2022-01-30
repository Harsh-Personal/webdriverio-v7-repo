import HomePage from "../pages/home.page";
import { expect } from "chai";

describe("Validate Copper.co Home Page", function () {
  this.beforeEach(() => {
    HomePage.open();
  });

  it("verify copper logo is visible", async () => {
    const logoPresent = await HomePage.verifyCopperLogoPresent();
    expect(logoPresent).to.be.true;
  });

  it("verify copper navigation items are present", async () => {
    const navItemsTextExpected = ["Clients", "Security", "Company", "Log in"];
    const navItemsTextRecieved = await HomePage.getNavItemsText();
    expect(navItemsTextExpected).to.be.eql(navItemsTextRecieved);
  });
});
