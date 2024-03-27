import { generateHype } from "./index";

describe("generateHype", () => {
  test("Says that everything is awesome", () => {
    expect(generateHype(3)).toBe("This is awesome!!!");
  });
});
