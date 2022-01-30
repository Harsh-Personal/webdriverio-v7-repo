import elements from "../data/elements.json";

export const verifyElementPresent = async (elementName) => {
  const element = await getElementId(elementName);
  return element.isDisplayed();
};

export const getElementId = async (elementName) => {
  const element = await $(elements[elementName]);
  await element.waitForExist();
  return element;
};

export const getElementText = async (elementName) => {
  const element = await getElementId(elementName);
  const textPresent = await element.getText();
  return textPresent;
};
